pipeline{
    agent any
    tools {
        nodejs '19.7.0'
    }
    stages{
        stage('build'){
            steps{
                sh "npm run build"
            }
        }
    }
}