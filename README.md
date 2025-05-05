Angular ECharts 
This Angular project demonstrates how to integrate ECharts, a powerful data visualization library, within an Angular application. It serves as a basic introduction to Angular components, data binding, and integrating third-party libraries into an Angular app. The app fetches static data and visualizes it using a bar chart with ECharts.

Project Overview
The application consists of two main components:

AppComponent: Displays the title and a brief description of the application.

ChartComponent: Displays a bar chart with static data using ECharts.

The app uses Angular's data binding features to pass data between components and render a visualization on the screen. The chart is configured with an array of sample data and is dynamically rendered using ECharts.

Features
Component Structure:

Created reusable components for the title/description and chart display.

Data Binding:

Used Angular's data binding features to pass data to the ECharts component.

ECharts Integration:

Installed and configured ECharts in the Angular application.

Rendered a bar chart with sample data.

Angular Lifecycle Hooks:

Used AfterViewInit to initialize the ECharts instance after the view has been fully rendered.

Steps to Set Up the Project
Install Dependencies:

Clone this repository to your local machine.

Run npm install to install all necessary dependencies.

Install ECharts via npm: npm install echarts --save.

Create Angular Components:

AppComponent: Displays a title and brief description.

ChartComponent: Visualizes data using ECharts (bar chart).

Data Handling:

Defined a simple data model and hardcoded data array.

Passed data to ChartComponent for visualization.

ECharts Integration:

Imported ECharts in ChartComponent.

Initialized the chart using the ngAfterViewInit lifecycle hook.

Configured chart options such as chart type, series data, and axes.

Run the Application:

Run the app using ng serve and open it in your browser.

Challenges Faced
ECharts Initialization: The main challenge was ensuring the ECharts chart was initialized correctly after the component was rendered. This was solved by using Angular’s AfterViewInit lifecycle hook, which ensures the chart is only initialized once the view is completely ready.

Data Binding: Passing data correctly between components was essential for dynamic chart rendering. I ensured that the data was passed through @Input() properties and updated efficiently.
