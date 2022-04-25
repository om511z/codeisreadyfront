const QuestionList = [
    {
       question: " Which of the following is correct about C#?",
       answerList:[
           {answer: "It is component oriented",isCorrect:false},
           {answer: "It can be compiled on a variety of computer platforms",isCorrect:false},
           {answer: "It is a part of .Net Framework",isCorrect:false},
           {answer: " All of the above",isCorrect:true}
       ] 
    },
    {
        question: "Which of the following converts a type to a Boolean value, where possible in C#?",
        answerList:[
            {answer: "ToSingle",isCorrect:true},
            {answer: " ToBoolean",isCorrect:false},
            {answer: " ToDateTime",isCorrect:false},
            {answer: "ToChar",isCorrect:false}
        ] 
     },
     {
        question: "Which of the following converts a type to a double type in C#?",
        answerList:[
            {answer: "ToDecimal",isCorrect:false},
            {answer: "ToDouble",isCorrect:true},
            {answer: "ToInt16",isCorrect:false},
            {answer: "ToInt32",isCorrect:false}
        ] 
     },
     {
        question: "  Which of the following converts a type to an unsigned big type in C#?",
        answerList:[
            {answer: "ToType",isCorrect:false},
            {answer: "ToUInt16",isCorrect:false},
            {answer: " ToUInt32",isCorrect:false},
            {answer: " ToUInt64 ",isCorrect:true}
        ] 
     },
     {
        question: "Which of the following access specifier in C# allows a class to expose its member variables and member functions to other functions and objects?",
        answerList:[
            {answer: "Public",isCorrect:true},
            {answer: "Private",isCorrect:false},
            {answer: " Protected",isCorrect:false},
            {answer: "Internal",isCorrect:false}
        ] 
     },
     {
        question: "Which of the following is true about C# structures?",
        answerList:[
            {answer: "Unlike classes, structures cannot inherit other structures or classes",isCorrect:false},
            {answer: "Structure members cannot be specified as abstract, virtual, or protected",isCorrect:false},
            {answer: " A structure can implement one or more interfaces",isCorrect:false},
            {answer: "All of the above",isCorrect:true}
        ] 
     },
     {
        question: "Operator overloading is a kind of dynamic polymorphism.",
        answerList:[
            {answer: "true",isCorrect:false},
            {answer: "false",isCorrect:true}
           
        ] 
     },
     {
        question: " The System.SystemException class is the base class for all predefined system exception in C#?",
        answerList:[
            {answer: "true",isCorrect:true},
            {answer: "false",isCorrect:false}
         
        ] 
     },
     {
        question: "CLR is the .Net equivalent of _____",
        answerList:[
            {answer: "Java Virtual machine",isCorrect:true},
            {answer: "Common Language Runtime",isCorrect:false},
            {answer: " Common Type System",isCorrect:false},
            {answer: "Common Language Specification",isCorrect:false}
        ] 
     },
     {
        question: "  Abstract class contains _____",
        answerList:[
            {answer: "Abstract methods",isCorrect:false},
            {answer: "Non Abstract methods",isCorrect:false},
            {answer: " Both",isCorrect:true},
            {answer: "None",isCorrect:false}
        ] 
     },
    
    
]

export default QuestionList;