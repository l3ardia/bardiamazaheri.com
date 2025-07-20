export interface OpenSourceProject {
  title: string;
  content: React.ReactNode;
}

import { Fragment } from "react";

export const openSourceProjects: OpenSourceProject[] = [
  {
    title: "aws-lambda-tflite",
    content: (
      <Fragment>
        <p>
          This project demonstrates how to deploy lightweight deep-learning inference
          models using <a
            href="https://aws.amazon.com/lambda/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            AWS Lambda
          </a>{" "}
          with{" "}
          <a
            href="https://www.tensorflow.org/lite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            TensorFlow Lite (TFLite)
          </a>.
        </p>
        <p>
          Due to the{" "}
          <a
            href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            250 MB unzipped deployment package limit
          </a>{" "}
          on Lambda, full TensorFlow runtimes are impractical. TFLite, however, is a
          minimal interpreter originally designed for mobile devices. Its small binary
          footprint and static memory requirements make it a good fit for serverless
          environments like Lambda.
        </p>
        <p>
          The{" "}
          <code>aws-lambda-tflite</code> repository provides a reference
          implementation for setting up such a pipeline using{" "}
          <a
            href="https://docs.aws.amazon.com/cdk/api/v2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            AWS CDK
          </a>:
        </p>

        <div className="max-w-[800px] mx-auto overflow-x-auto mt-4">
          <table className="min-w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 font-semibold text-gray-700">
                  Component
                </th>
                <th className="border border-gray-300 px-4 py-2 font-semibold text-gray-700">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Deployment
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  The CDK stack packages{" "}
                  <a
                    href="https://pypi.org/project/tflite-runtime/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    tflite-runtime
                  </a>,{" "}
                  <a
                    href="https://pypi.org/project/numpy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    numpy
                  </a>,{" "}
                  <a
                    href="https://pypi.org/project/Pillow/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Pillow
                  </a>{" "}
                  and other dependencies into a Lambda Layer, and exposes the function
                  via{" "}
                  <a
                    href="https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    API Gateway
                  </a>.
                </td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Model Workflow
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Models are trained using standard{" "}
                  <a
                    href="https://www.tensorflow.org/versions/r2.7/api_docs/python/tf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    TensorFlow 2.7
                  </a>, then converted to{" "}
                  <a
                    href="https://www.tensorflow.org/lite/convert"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    TFLite format
                  </a>{" "}
                  using a provided script, and uploaded to an{" "}
                  <a
                    href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Amazon S3 bucket
                  </a>{" "}
                  defined in the stack.
                </td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Runtime Characteristics
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  The function stays within Lambda’s resource constraints and supports
                  scalable inference with cold-start times typically under one second.
                </td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">
                  Example Usage
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  A{" "}
                  <a
                    href="https://colab.research.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Google Colab
                  </a>{" "}
                  notebook demonstrates training, quantization, and invocation of the{" "}
                  <code>/classify</code> endpoint via cURL.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 font-semibold">Use Cases</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Running machine learning inference (e.g. image classification, NLP tasks) on
            demand without persistent infrastructure.
          </li>
          <li>
            Rapid API prototyping using pre-trained or quantized{" "}
            <a
              href="https://www.tensorflow.org/lite/guide/models"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              TFLite models
            </a>.
          </li>
          <li>
            Event-driven or infrequent inference scenarios that benefit from{" "}
            <a
              href="https://aws.amazon.com/lambda/pricing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              pay-per-request pricing
            </a>.
          </li>
        </ul>

        <p>
          Source code available at{" "}
          <a
            href="https://github.com/l3ardia/aws-lambda-tflite"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            github.com/l3ardia/aws-lambda-tflite
          </a>. Contributions, feedback, and suggestions are welcome.
        </p>
      </Fragment>
    ),
  },
];
