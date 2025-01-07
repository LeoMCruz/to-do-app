# Todo App

This is a simple project, to you add your daily tasks and mark it if done.

## Used Technologies
- Typescript
- React Native
- Axios
- Aws EC2 instance

# Features and Requirements

 **Login Screen**
 - Shows an error if the user types wrong credentials.
 - If user types the correctly credentials, he will be redirect to Home screen.

 **Home Screen**
 - Show your created tasks on a list.
 - Have tags to created tasks and finished (done) tasks.
 - You can click on left buttom on task list to mark if it is done or not.
 - When you click on "trash icon", it shows a modal with edit and delete options.
 - On the bottom right corner, have a create button, there you can create new tasks.
 - If you left the create task input empty, you wont able to click the create button.
 - On search input, you can type anything and click search to filter your tasks.
 - if it fails to recieve api data, will show an error message.

# How to Run the Project
- Fallow the Israel Barberino tutorial to setup your EC2 instance, and run the api [Deploy EC2](https://israelbarberino-dev.notion.site/Guia-para-Deploy-em-inst-ncia-do-AWS-EC2-12da01dcbda18080a08be3007e1ec9cf).
- Clone Git repository: 
    + git clone https://github.com/LeoMCruz/to-do-app.git
- Open project folder and install the dependencies using "npm install" or "yarn".
- Run the command "npx expo start", to start the project.
- If you have the Android Studio on you machine, after the last step, click "A", to open the emulator.
- If you dont have Android Studio, you can download expo-go app on your phone and scan the QRCODE.

## Apresentation Video
[YouTube](https://youtu.be/mwbyx43Fomg)

## Api file 
[API](https://youtu.be/mwbyx43Fomg)
