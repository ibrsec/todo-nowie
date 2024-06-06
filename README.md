<a name="readme-top"></a>
 
 
<!-- PROJECT LOGO -->
<br />
<div align="center">
   
  <a href="https://github.com/ibrsec/todo-nowie/">
    <img src="./public/images/logo.png" alt="Logo" width="250"   >
  </a>

  <h3 align="center">Todo Nowie</h3>

  <p align="center">
    An awesome Todo App
    <a href="https://github.com/ibrsec/todo-nowie"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://todo-nowie-nextjs.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/ibrsec/todo-nowie/issues">Report Bug</a>
    ·
    <a href="https://github.com/ibrsec/todo-nowie/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>📎 Table of Contents 📎 </summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
     <!-- <li><a href="#figma">Figma</a></li> -->
     <li><a href="#overview">Overview</a></li>
     <li><a href="#quick-setup">Quick Setup</a></li>
     <li><a href="#directory-structure">Directory structure</a></li>
     <li><a href="#built-with">Built With</a></li>
    <!-- <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li> -->

    
  </ol>
</details>





---

<!-- ABOUT THE PROJECT -->
<a name="about-the-project"></a>
## ℹ️ About The Project

[![todo-nowie](./public/images/project.gif)](https://todo-nowie-nextjs.vercel.app/)




<p align="right">(<a href="#readme-top">back to top</a>)</p>


---

<!-- ## Figma 

<a href="https://www.figma.com/file/ePyCHKsx2ODB32uLgyUEEd/bootstrap-home-page?type=design&node-id=0%3A1&mode=design&t=edDzadCB9Ev5FS1a-1">Figma Link</a>  

  <p align="right">(<a href="#readme-top">back to top</a>)</p>




--- -->
<a name="overview"></a>
## 👀 Overview

📦 Used mock api  for store todo data </br>
🎯 Used next js react environment, context api,next app-routing,tailwind ,next fetch, react-toastify, firebase, cypress </br>
🖥 User can Register or login with the ready credentials on the login page, Contents can be accessed after logging in! </br>
🔩 After login there is  a few page like dashboard,oldotodos, big todos</br>
💪 User can track, add, delete, edit, change status, and manage daily and undaily todo tasks</br>
🌱 User can add steps to the tasks and manage them</br>
🐞 User can access to the todo tasks according to their dates under old todos tab   </br>
🏀 User can create and manage big tasks under big todos tasks
🌱 User can add and manage the steps of the big tasks and he can make these step daily task of the current day</br> 
</br>


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<a name="quick-setup"></a>
## 🛫 Quick Setup

```sh
# clone the project
git clone https://github.com/ibrsec/todo-nowie.git

# enter the project directory
cd todo-nowie

# install dependency
npm install || yarn install

# develop
npm run dev || yarn start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ## 🐞 Debug

![todo-nowie.gif](/todo-nowie.gif) -->








<a name="directory-structure"></a>
## 📂 Directory structure 

```diff
todo-nowie  (folder)
  |          
  |---cypress (folder) 
  |                
  |---public (folder) 
  |                
+ |---src (folder) 
  |     |---assests (folder)  
  |     |           
  |     |---components (folder) 
  |     |    
  |     |    
  |     |---app (folder)       
  |     |     |---(public) (folder) 
  |     |     |       |---layout.jsx
  |     |     |       |---login (folder) 
  |     |     |       |       └---layout.jsx       
  |     |     |       |       └---page.jsx       
  |     |     |       |
  |     |     |       └---register (folder) 
  |     |     |              └---layout.jsx       
  |     |     |              └---page.jsx       
  |     |     |
  |     |     |---(private) (folder) 
  |     |     |       |---layout.jsx
  |     |     |       |---dashboard (folder) 
  |     |     |       |       |---components (folder) 
  |     |     |       |       |---layout.jsx       
  |     |     |       |       └---page.jsx       
  |     |     |       |
  |     |     |       |---oldtodos (folder) 
  |     |     |       |       |---components (folder) 
  |     |     |       |       |---layout.jsx       
  |     |     |       |       └---page.jsx       
  |     |     |       |
  |     |     |       |---bigtodos (folder) 
  |     |     |       |       |---components (folder) 
  |     |     |       |       |---layout.jsx       
  |     |     |       |       └---page.jsx       
  |     |     |       |
  |     |     |       └---detail (folder) 
  |     |     |               └---[id] (folder) 
  |     |     |                      └---components (folder) 
  |     |     |               |---layout.jsx       
  |     |     |               └---page.jsx        
  |     |     |
  |     |     |---global.css 
  |     |     |---layout.js 
  |     |     └---page.js  
  |     |          
  |     |---context (folder)       
  |     |     |---AuthProvider.jsx  
  |     |     └---TodoProvider.jsx       
  |     |          
  |     |---auth (folder)        
  |     |     └---auth.js           
  |     |          
  |     └---helper (folder)        
  |          └---ToastifyNotify.js       
  |      
  |----next.config.mjs
  |----jsconfig.json
  |----postcss.config.mjs
  |----package.json
  |----yarn.lock
  |----tailwind.config.js
  |----cypress.config.js
  |----.env.local
  └----readme.md 
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<a name="built-with"></a>
### 🏗️ Built With

 
<!-- https://dev.to/envoy_/150-badges-for-github-pnk  search skills-->

 <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white">
 <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white&color=red"> 
 <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
 <!-- <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">  -->
 <!-- <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">  -->
 <!-- <img src="https://img.shields.io/badge/Vite-AB4BFE?style=for-the-badge&logo=vite&logoColor=FFC920">  -->
 <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> 
 <img src="https://img.shields.io/badge/Next-20232A?style=for-the-badge&logo=next&logoColor=61DAFB"> 
 <!-- <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">  -->
 <img src="https://img.shields.io/badge/App-Router-CA4245?style=for-the-badge&logo=app-router&logoColor=white"> 

 <!-- <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"> 
 <img src="https://img.shields.io/badge/Redux Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white"> 
 <img src="https://img.shields.io/badge/Redux--Persist -593D88?style=for-the-badge&logo=redux&logoColor=white">  -->
 <img src="https://img.shields.io/badge/Context API-593D88?style=for-the-badge&logo=context&logoColor=white"> 


 <!-- <img src="https://img.shields.io/badge/Axios-593D88?style=for-the-badge&logo=axios&logoColor=white">  -->

 <!-- <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">  -->

 <!-- <img src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white">  -->
 <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"> 
 <!-- <img src="https://img.shields.io/badge/Formik-172B4D?style=for-the-badge&logo=formik&logoColor=white">  -->
 <!-- <img src="https://img.shields.io/badge/Yup-172B4D?style=for-the-badge&logo=yup&logoColor=white">  -->
 <img src="https://img.shields.io/badge/Toastify-45CC11?style=for-the-badge&logo=toastify-ui&logoColor=white"> 
 



 
<p align="right">(<a href="#readme-top">back to top</a>)</p>


