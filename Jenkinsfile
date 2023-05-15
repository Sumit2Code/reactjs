pipeline{
    agent any
    tools {
        nodej '18.12.1'
    }
    stages{
        stage('build'){
            steps{
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}
