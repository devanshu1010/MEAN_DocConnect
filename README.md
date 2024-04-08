# Doc Connet

A online doctor appointment booking system for patient. 
In this doctor can easily provide their slot for which they are available. This slots can be booked by Patient and getting an appointment by paying counselling fees. Patient can join meeting on time by Id which is send by doctor on mail to patient.

**[LIVE DEMO](https://devanshu1010.github.io/MEAN_DocConnect/)**

![Screenshot](https://res.cloudinary.com/dcz8mfqmp/image/upload/v1712564743/Home_nq7sqx.png)

## **Dependencies**

### **Frontend**
- [Angular 16+](https://angular.io/)
- [emailjs 3.2+](https://www.emailjs.com/)
- [razorpay 2.0+](https://razorpay.com/)

### **Backend**
- [Node](https://nodejs.org/en/)
- [mongoDB](https://www.mongodb.com/)
- [NodeMailer](https://www.nodemailer.com/)

# **SETUP**

## **Frontend (Client Part)**

### **1.1 navigate to `Doc-Connect/Client/` directory.**

```
#  navigate to Client 
$ cd Doc-Connect/Client
```

### **1.2 Create environments:**   
```
  # from Doc-Connect/Client
  $ ng generate environments
```

### **1.3 Fill the desired environment variables:**  
- navigate to `Doc-Connect/Client/src/environments`
- set values to variables
```
  environment = {
    production: false,
    EMAIL:'',  <-- Your mail id for emailjs,
    PASSWORD:'', <-- Your password for emailjs,
    SERVICE_ID:'', <-- Your sercice id,
    TEMPLATE_ID:'', <-- Your template id,
    USER_ID:'', <-- Your user id,
    DOCTOR_TEMPLATE_ID:'', <-- Your 2nd template id,
    baseUrl : "http://localhost:8082/", <-- server URL
  };

```

### **2. then install dependencies  & run serve**

In terminal - command
```
# install dependencies
$ npm install

# serve frontend
$ ng serve
```

<br>

## **Backend (Server Part)**
### **1.1 navigate to `Doc-Connect/Server` directory.**
```
cd Doc-Connect/Server
```
### **1.2 create `.env` file & add variables:**
- copy below example env file
- set your desired variable value
```
  key_id= ''  <-- razorpay id
  key_secret= ''  <-- razorpay secret kry
  
  mongoURI = ""  <-- mongodb database Connectiion string
  EMAIL:'',  <-- Your mail id,
  PASSWORD:'', <-- Your password ,
  
  CLOUD_NAME=''   <-- Node mailer name
  CLOUD_API_KEY=   <-- Node mailer key  //ex.: 465498455 
  CLOUD_API_SECRET=''  <-- Node mailer secret key  //ex.: vne_TbdkjbdjiftzyODRazjoqjH1IQ 
  
  JWT_SECRET_KEY="SECRET_KEY"
```
### **2. then install dependencies & run dev**

In terminal - command
```
#  navigate to Doc-Connect/Server 
$ cd Doc-Connect/Server

# install dependencies
$ npm install
```


