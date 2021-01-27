pipeline{
    agent any
    stages{
        stage("Installing NPM packages"){
            steps{
                bat "npm install"
            }
        }
           stage("Building React Application"){
            steps{
                
                echo "generate distribution files to build folder"
                bat "npm run build"
            }
        }
         stage("Deploy to Apache"){
            steps{
                echo "Deploying react app to apache web server"
                bat "xcopy /s build C:\\xampp\\htdocs"
            }
        }
    }
}