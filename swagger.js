const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Cuddly Store API",
    description: "Tài liệu API tự động sinh ra",
  },
  host: "", // Để trống để nó tự nhận diện host hiện tại
  basePath: "/",
  schemes: ["http"],
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["./index.js"]; // Nó sẽ tự quét từ index.js ra các route khác

swaggerAutogen(outputFile, endpointsFiles, doc);
