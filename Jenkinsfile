pipeline {
    agent {
        node {
            label 'agent-react'
        }
    }

    stages {
        stage('Continuous integration') {
            steps {
                git branch: 'main', url: 'https://github.com/Manel2024-stack/jenkins_project_react.git'
            }
        }
        stage('Build React') {
            steps {
                sh '''
                npm install
                npm run build
                docker build -t horloge-en-direct .
                '''
            }
        }
        stage('Run Docker Container') {
            steps {
                sh '''
                docker run -p 3000:3000 horloge-en-direct
                '''
            }
        }
        stage('Contrôle qualité') {
            steps {
                sh '''
                sonar-scanner \
                      -Dsonar.projectKey=jenkins_project_react \
                      -Dsonar.sources=. \
                      -Dsonar.host.url=http://192.168.232.132:9000 \
                      -Dsonar.token=sqp_eaaf0ecf3a792bd03236d218ca799df65d46fad0
                '''
            }
        }
    }
}
