# Budget Bites

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FoodBudget - Smart Meal Planner</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }

        .container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 500px;
            width: 100%;
            overflow: hidden;
            animation: slideUp 0.5s ease;
        }

        @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }

        .header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }

        .header p {
            opacity: 0.9;
            font-size: 14px;
        }

        .step-indicator {
            display: flex;
            justify-content: center;
            padding: 20px;
            background: #f8f9fa;
            gap: 10px;
        }

        .step-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #ddd;
            transition: all 0.3s;
        }

        .step-dot.active {
            background: #667eea;
            transform: scale(1.2);
        }

        .step-dot.completed {
            background: #48bb78;
        }

        .content {
            padding: 30px;
        }

        .step {
            display: none;
            animation: fadeIn 0.4s;
        }

        .step.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
        }

        h2 {
            color: #2d3748;
            margin-bottom: 10px;
            font-size: 24px;
        }

        .subtitle {
            color: #718096;
            margin-bottom: 25px;
            font-size: 14px;
        }

        .input-group {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #4a5568;
            font-weight: 600;
            font-size: 14px;
        }

        input[type="number"],
        input[type="text"] {
            width: 100%;
            padding: 15px;
            border: 2px solid #e2e8f0;
            border-radius: 10px;
            font-size: 16px;
            transition: border-color 0.3s;
        }

        input[type="number"]:focus,
        input[type="text"]:focus {
            outline: none;
            border-color: #667eea;
        }

        .currency {
            position: relative;
        }

        .currency::before {
            content: '$';
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
            color: #667eea;
            font-weight: bold;
        }

        .currency input {
            padding-left: 35px;
        }

        .options-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
        }

        .option-card {
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            padding: 20px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
            background: white;
        }

        .option-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .option-card.selected {
            border-color: #667eea;
            background: #f7fafc;
            color: #667eea;
        }

        .option-icon {
            font-size: 32px;
            margin-bottom: 10px;
            display: block;
        }

        .option-label {
            font-size: 14px;
            font-weight: 600;
        }

        .option-desc {
            font-size: 12px;
            color: #718096;
            margin-top: 5px;
        }

        .btn {
            width: 100%;
            padding: 15px;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 10px;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
            background: #edf2f7;
            color: #4a5568;
        }

        .btn-secondary:hover {
            background: #e2e8f0;
        }

        .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }

        .results-list {
            max-height: 400px;
            overflow-y: auto;
        }

        .result-card {
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 15px;
            margin-bottom: 15px;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            gap: 15px;
            align-items: center;
        }

        .result-card:hover {
            border-color: #667eea;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }

        .result-image {
            width: 80px;
            height: 80px;
            background: #f7fafc;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            flex-shrink: 0;
        }

        .result-info {
            flex: 1;
        }

        .result-title {
            font-weight: 700;
            color: #2d3748;
            margin-bottom: 5px;
        }

        .result-meta {
            font-size: 13px;
            color: #718096;
            margin-bottom: 5px;
        }

        .result-price {
            color: #48bb78;
            font-weight: 700;
            font-size: 18px;
        }

        .badge {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-right: 5px;
        }

        .badge-junk { background: #fed7d7; color: #c53030; }
        .badge-healthy { background: #c6f6d5; color: #22543d; }
        .badge-feast { background: #feebc8; color: #c05621; }

        .summary-box {
            background: #f7fafc;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
        }

        .summary-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            font-size: 14px;
        }

        .summary-item:last-child {
            margin-bottom: 0;
            padding-top: 10px;
            border-top: 1px solid #e2e8f0;
            font-weight: 700;
            color: #2d3748;
        }

        .location-input {
            position: relative;
        }

        .location-btn {
            position: absolute;
            right: 5px;
            top: 50%;
            transform: translateY(-50%);
            background: #667eea;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 12px;
        }

        .distance-slider {
            width: 100%;
            margin: 20px 0;
        }

        .distance-labels {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #718096;
            margin-top: 5px;
        }

        .loading {
            text-align: center;
            padding: 40px;
        }

        .spinner {
            width: 50px;
            height: 50px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #667eea;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .hidden {
            display: none;
        }

        @media (max-width: 480px) {
            .container {
                border-radius: 0;
                min-height: 100vh;
            }
            
            body {
                padding: 0;
            }
        }
    


    


        


            

🍽️ FoodBudget


            

Smart meal planning within your budget


        



        


            


            


            


            


            


            


        



        


            
            


                

What's your budget?


                

Enter the amount you want to spend


                
                


                    
                



                Continue
            



            
            


                

What type of meal?


                

Select your preferred food category


                
                


                    


                        🍔
                        

Junk Food


                        

Quick & tasty


                    


                    


                        🥗
                        

Healthy


                        

Nutritious meals


                    


                    


                        🍖
                        

Feast


                        

Special occasion


                    


                



                Back
                Continue
            



            
            


                

How many people?


                

Select the portion size


                
                


                    


                        👤
                        

Just Me


                        

1 person


                    


                    


                        👥
                        

Small Group


                        

2-4 people


                    


                    


                        👨‍👩‍👧‍👦
                        

Large Group


                        

8-12 people


                    


                



                Back
                Continue
            



            
            


                

Quality preference?


                

This helps us filter options within your budget


                
                


                    


                        💰
                        

Budget


                        

Save money


                    


                    


                        💰💰
                        

Standard


                        

Good value


                    


                    


                        💰💰💰
                        

Premium


                        

Best quality


                    


                



                Back
                Continue
            



            
            


                

Where are you?


                

We'll find places near you


                
                


                    Enter your location or use GPS
                    
                    📍 Use GPS
                



                


                    Maximum distance: 5 km
                    
                    


                        1km
                        10km
                        20km
                    


                



                Back
                Continue
            



            
            


                

Where to buy?


                

Choose your preferred shopping location


                
                


                    


                        🏪
                        

Tuckshop


                        

Quick meals & snacks


                    


                    


                        🛒
                        

Grocery Store


                        

Ingredients to cook


                    


                



                


                    


                        Budget:
                        $0
                    


                    


                        Meal Type:
                        -
                    


                    


                        Portion:
                        -
                    


                    


                        Location:
                        -
                    


                



                Back
                Find Places
            



            
            


                

Recommended Places


                

Based on your preferences


                
                


                    


                    

Finding best options near you...


                



                


                    
                



                Start Over

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6a5cb668-6250-4d88-bb1f-aa02d71285b0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
