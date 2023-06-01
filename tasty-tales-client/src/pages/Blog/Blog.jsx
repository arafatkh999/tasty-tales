import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <h2 className="text-xl font-bold mb-2">
        The differences between uncontrolled and controlled components
      </h2>
      <p>
        In the context of a software application, "components" refer to the
        building blocks of the application that perform specific functions.
        <br />
        Uncontrolled components and controlled components are two types of
        components used in web development.
        <br />
        An uncontrolled component is a form element (e.g., input, textarea)
        whose value is managed by the DOM instead of being controlled by React.
        The value of an uncontrolled component is typically read from the DOM
        when the form is submitted. Uncontrolled components are easy to use
        because you don't need to write any extra code to manage their state.
        However, they offer limited control over the user input and can cause
        issues when you need to perform validation or conditional rendering.
        <br />
        A controlled component, on the other hand, is a form element whose value
        is controlled by React. When the user enters a value, React updates the
        component's state, which in turn updates the component's value.
        Controlled components allow you to have more control over the user input
        and make it easier to implement features like validation, conditional
        rendering, and undo/redo. However, they require more code to manage
        their state, and can be more complex to set up.
        <br />
        In summary, the main differences between uncontrolled and controlled
        components are:
        <br />
        <li>
          Uncontrolled components are simpler to use but offer limited control
          over user input, while controlled components are more complex to set
          up but offer greater control over user input.
        </li>
        <li>
          Uncontrolled components have their state managed by the DOM, while
          controlled components have their state managed by React.
        </li>
      </p>

      <h2 className="text-xl font-bold my-4">
        How to validate React props using PropTypes
      </h2>
      <p>
        In React, PropTypes is a way to specify the expected types of the props
        that a component should receive. PropTypes can help to catch bugs early
        by providing warnings in the browser console when a component is used
        with props of the wrong type.
        <br /> <br />
        Here's how to validate React props using PropTypes:
        <li>
          First, you need to install the PropTypes package using npm or yarn:
        </li>
        <li>Import PropTypes in your component:</li>
        <li>
          Declare the expected prop types in your component's propTypes object:
        </li>
        <li>
          Finally, pass the props to your component. If any prop has an
          incorrect type, you will see a warning in the console.
        </li>
        <br />
        It's important to note that PropTypes is not intended to replace
        server-side validation or TypeScript/Flow. PropTypes is only meant to be
        a helpful tool to catch bugs early in the development process.
      </p>

      <h2 className="text-xl font-bold my-4">
        The difference between nodejs and express js
      </h2>
      <p>
        Node.js and Express.js are both frameworks used in server-side web
        development, but they serve different purposes.
        <br /> <br />
        Node.js is a JavaScript runtime built on the V8 engine. It provides an
        environment to run JavaScript code outside of a browser, allowing
        developers to build server-side applications using JavaScript. Node.js
        has a non-blocking I/O model, which means that it can handle a large
        number of connections with low overhead. Node.js can be used to build a
        variety of applications, including web servers, command-line tools, and
        desktop applications.
        <br /> <br />
        Express.js, on the other hand, is a web application framework built on
        top of Node.js. It provides a set of tools and utilities to help
        developers build web applications quickly and easily. Express.js
        provides features such as routing, middleware, and template engines,
        making it easier to build robust web applications. Express.js can be
        used with any database or front-end framework, and it is often used in
        conjunction with popular front-end frameworks such as React and Angular.
        <br /> <br />
        In summary, the main difference between Node.js and Express.js is that
        Node.js is a JavaScript runtime environment, while Express.js is a web
        application framework built on top of Node.js. Node.js provides the
        platform for running JavaScript code on the server, while Express.js
        provides a set of tools and utilities to make it easier to build web
        applications.
      </p>

      <h2 className="text-xl font-bold my-4">What is a custom hook</h2>
      <p>
        A custom hook is a JavaScript function that allows you to extract and
        reuse logic that is shared between different components in a React
        application. Custom hooks follow the naming convention of starting with
        the word "use" and are usually created using built-in hooks like
        useState, useEffect, and useContext.
        <br />
        <br />
        Custom hooks can be used to abstract away complex logic and provide a
        simple interface for components to interact with. By creating custom
        hooks, you can reduce code duplication, make your code more reusable,
        and keep your components clean and easy to maintain.
      </p>

      <h2 className="text-xl font-bold my-4">
        Why will we create a custom hook ?
      </h2>
      <p>
        We create a custom hook in React to extract and reuse logic that is
        shared between different components in a more efficient and reusable
        way.
        <br /> <br />
        Here are some reasons why you might want to create a custom hook:
        <br /> <br />
        <li>
        Reusability: If you find yourself writing the same code or using the same logic in multiple components, you can create a custom hook to extract that code and reuse it across multiple components.
        </li>
        <li>
        Abstraction: Custom hooks can abstract away complex logic and provide a simple interface for components to interact with. This can make your code more readable and easier to maintain.
        </li>
        <li>
        Encapsulation: Custom hooks can encapsulate logic related to a specific feature or functionality of your application. This can help to keep your components focused on their specific responsibilities and reduce the likelihood of bugs.
        </li>
        <li>
        Testing: Custom hooks can make it easier to write unit tests for your application logic. By extracting logic into a custom hook, you can test that logic independently of the components that use it.
        </li>
        <li>
        Composability: Custom hooks can be composed together to build more complex functionality. This can make it easier to build larger applications with more complex requirements.
        </li>

        <br />
     
        In summary, creating a custom hook can help you to write cleaner, more modular, and reusable code in your React application. Custom hooks allow you to extract logic that is shared between multiple components, abstract away complex logic, and encapsulate functionality into a single, testable unit.
      </p>
    </div>
  );
};

export default Blog;
