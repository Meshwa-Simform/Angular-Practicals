# Create a New Angular Project Using CLI
First, ensure you have the Angular CLI installed. If it's not installed, you can install it globally via npm:
~~~
npm install -g @angular/cli
~~~
check whether the Angular is installed in our system and the version of the installed Angular using command:
~~~
ng --version
~~~

# Create Angular Application
To create a new Angular Application `ng new` command is used:
~~~
ng new my-angular-app
~~~
This command creates a new Angular project named my-angular-app and will prompt you for a few configuration options, like 
- Which stylesheet format would you like to use? 
  - CSS             
  - Sass (SCSS)     
  - Sass (Indented) 
  - Less           
- Do you want to enable Server-Side Rendering (SSR) and Static Site Generation ? 

# Start the Development Server with ng serve
ng serve is used to run your Angular application in a development environment. It starts a development server and serves your app. To serve your Angular app locally during development, use:
~~~
ng serve
~~~
This will:
- Start the development server.
- Compile the application and open it in the browser (usually http://localhost:4200).

Important Parameters of ng serve:
- To serve on a different port and open the browser:
~~~
ng serve --port 4300 
~~~

# Build the Project with ng build
ng build compiles your Angular application into static files (HTML, CSS, and JavaScript) for production or development. It outputs the compiled files into the dist/ folder, which can then be served by a web server. To build the application, use:
~~~
ng build
~~~
This will compile the project and create a dist/ folder with the production-ready files.

Parameters of ng build:
- **--prod:** Builds the application in production mode. This optimizes the build, enabling Ahead-of-Time (AOT) compilation, minification, and tree shaking for better performance.
For production build:
~~~
ng build --prod
~~~
For a non-production (development) build:
~~~
ng build
~~~

# Add a Third-Party Module
Let's add a third-party module, for example, ng-bootstrap.

#### Steps:
1. Install the package via npm:
~~~
npm install @ng-bootstrap/ng-bootstrap
~~~
2. Import the module into your app. Open `app.component.ts` and add the necessary module from ng-bootstrap:
~~~
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgbDropdown],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-angular-app';
}
~~~

# Add Components, Services, and Modules Using Angular CLI
Angular CLI allows you to generate components, services, and modules with a simple command. Here are the commands for each:

### Add a Component:
~~~
ng generate component my-component
or
ng g c my-component
~~~
This will generate a new component with the required files (HTML, CSS, TypeScript and testing file).

### Add a Service:
~~~
ng generate service my-service
or
ng g s my-service
~~~
This creates a service file and a testing file.

### Add a Module:
~~~
ng generate module my-module
or
ng g m my-module
~~~
This will create a new module, including the my-module.module.ts file.

# Modify configurations of angular.json, tsconfig, and package.json.
- #### angular.json:
    To include the Bootstrap CSS file in your Angular application, you need to modify the `styles` array in the `angular.json` file
    ~~~
    "styles": [
        "src/styles.css",
        "node_modules/bootstrap/dist/css/bootstrap.min.css"
    ]
    ~~~
- #### package.json:
    After installing Bootstrap, the package.json should automatically be updated to include Bootstrap under dependencies
    ~~~
    "dependencies": {
        "@ng-bootstrap/ng-bootstrap": "^18.0.0",
        // Other dependencies...
    }
    ~~~
- #### tsconfig
    It manages TypeScript compilation and ensures the necessary paths and settings for Angular development like we can set outdir, strict, target etc.

# Add new environment file for staging env.
1. #### Create the Staging Environment File
    create a new environment file specifically for staging.

    **Step 1:** Create the Staging Environment File

    Inside the `src/environments/` folder, create a new file called `environment.staging.ts` and add the configuration settings relevant to the staging environment.
    ~~~
    export const environment = {
        production: false,    // This will be false since staging isn't production
        staging: true,        // A flag indicating the staging environment
        apiUrl: 'https://api.staging.example.com', // URL for staging API
        // Add other environment-specific settings here
    };
    ~~~
2. #### Modify angular.json to Add a Staging Build Configuration
    **Step 2:** Modify angular.json
    
    In your angular.json, add a new configuration for the staging environment under the fileReplacements section for the build target. This tells Angular to replace the environment.ts file with your environment.staging.ts file during the build for staging.

    Find the "build" and "serve" sections for your app, and modify them
    ~~~
    "staging": {
        "fileReplacements": [
        {
            "replace": "src/environments/environment.ts",
            "with": "src/environments/environment.staging.ts"
        }
        ],
        // other configurations
    }
    ~~~
3. #### Use Staging Configuration in the Code
    In your application code, you can now use the environment configuration as usual. The staging environment will be automatically used when you build or serve the app with the staging configuration.

    For example, in your components or services, you can access the environment object like this:
    ~~~
    import { environment } from '../environments/environment';

    console.log(environment.apiUrl); 
    ~~~
4. #### Building and Serving the Staging Environment
    To build your application for the staging environment, run the following command:
    ~~~
    ng build --configuration=staging
    ~~~
    This will use the environment.staging.ts file and the settings defined in the angular.json file to produce a build specifically for staging.

    To serve the staging version of your app, run:
    ~~~
    ng serve --configuration=staging
    ~~~
    This will serve the application using the staging environment settings.