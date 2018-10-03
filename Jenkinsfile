pipeline {
  options {
    buildDiscarder(logRotator(numToKeepStr: '10'))
    disableConcurrentBuilds()
  }
  agent any
  stages {
    stage('Build') {
      steps {
        ansiColor('xterm') {
          sh 'docker run --rm -v $(pwd):/app -w /app $DOCKER_NODE npm --registry=https://registry.npmjs.org install'
          sh 'docker run --rm -v $(pwd):/app -w /app $DOCKER_NODE npm run-script build'
        }
      }
    }
    stage('Publish') {
      when {
        branch 'master'
      }
      steps {
        ansiColor('xterm') {
          withNPM(npmrcConfig: 'npm-jcurnow') {
            sh 'docker run --rm -v $(pwd):/app -w /app $DOCKER_NODE npm --registry=https://registry.npmjs.org publish'
          }
        }
      }
    }
  }
  post {
    success {
      juxtapose event: 'success'
      sh 'figlet "SUCCESS"'
    }
    failure {
      juxtapose event: 'failure'
      sh 'figlet "FAILURE"'
    }
  }
}

