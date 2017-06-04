export default [
    {
        tag: 'S3',
        question: 'A company is trying to reduce their storage costs and want a more cost effective solution than Amazon S3.\ ' +
        'Secondly they claim that their data store is not frequently accessed. What is the best and cost efficient solution ' +
        'that should be considered?',
        answers: [
            {
                text: 'Amazon Storage Gateway',
            },
            {
                text: 'Amazon Glacier',
            },
            {
                text: 'Amazon EBS',
            },
            {
                text: 'Amazon S3',
            }
        ],
        correctAnswer: 2,
        chosenAnswer: null,
        explanation: 'The correct answer is Amazon Glacier because xx'
    },
    {
        tag: 'VPC',
        question: 'A VPC has been setup with public subnet and an internet gateway. You setup and EC2 instance with a' +
        ' public IP. But you are still not able to connect to it via the Internet. You can see that the right Security' +
        ' groups are in place. What should you do to ensure you can connect to the EC2 instance from the internet',
        answers: [
            {
                text: 'Set an Elastic IP Address to the EC2 instance',
            },
            {
                text: 'Set a Secondary Private IP Address to the EC2 instance',
            },
            {
                text: 'Set a Secondary Private IP Address to the EC2 instance',
            },
            {
                text: 'There must be some issue in the EC2 instance. Check the system logs.',
            }
        ],
        correctAnswer: 2,
        chosenAnswer: null,
        explanation: 'The correct answer is Amazon Glacier because xx'
    }
]