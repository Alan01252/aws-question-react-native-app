export default [{
    tag: 'Storage',
    question: 'Which of the below storage solutions would provide the most cost effective options for customers to' +
    'store data which isn\'t required to be accessed frequently',
    answers: [
        {
            id: 0,
            text: 'Amazon Storage Gateway',
        },
        {
            id: 1,
            text: 'Amazon Glacier',
        },
        {
            id: 2,
            text: 'Amazon EBS',
        },
        {
            id: 3,
            text: 'Amazon S3',
        }
    ],
    correctAnswer: 1,
    chosenAnswer: null,
    explanation: 'Amazon Glacier is Amazons low-cost cloud storage solution for data archiving and long-term backup of data.' +
    '\n\nPrices range from as a little as $0.004 per gigabyte per month.\n\nAmazon Glacier provides three options for access to archives' +
    ', from a few minutes to several hours'
}, {
    tag: 'Storage',
    question: 'How much does it cost to transfer data from EC2 to S3 assuming they are in the same region.',
    answers: [
        {
            id: 0,
            text: 'There is no cost for inter-region data transfer between EC2 to S3 ',
        },
        {
            id: 1,
            text: 'There is a charge of $0.020 per gigabyte',
        },
        {
            id: 2,
            text: 'It is free for up to 10 gigabytes of data',
        },
        {
            id: 3,
            text: 'It is impossible to transfer data between EC2 and S3',
        }
    ],
    correctAnswer: 0,
    chosenAnswer: null,
    explanation: 'There is no charge for inter-region data transfer between EC2 and S3.\n\nFor example there is no charge ' +
    'between an S3 bucket in eu-central-1 and an instance running in the availability zone eu-central-1a.\n\nData transferred ' +
    'between AWS services in different regions will be charged as Internet Data Transfer on both sides of the transfer'
}]
