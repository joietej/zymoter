const routes = require("../config/routes");
const fs = require("fs");

const template = (name) =>
  `import React from 'react'

const ${name} = () => {
    return (
        <div>
            ${name} Content
        </div>
    )
}
export default ${name}`;

const path = "components";

const generateComponents = () => {
  routes.forEach((route) => {
    fs.mkdir(`${path}${route.path}`, { recursive: true }, (err) => {
      if (err) {
        console.log(err);
      }
    });

    fs.writeFile(
      `${path}${route.path}/${route.name}.js`,
      template(route.name),
      (err) => {
        if (err) {
          console.log(err);
        }
      }
    );

    if (route.sub && route.sub.length > 0) {
      route.sub.forEach((sr) => {
        fs.writeFile(
          `${path}${route.path}/${sr.name}.js`,
          template(sr.name),
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        );
      });
    }
  });
};

generateComponents();
