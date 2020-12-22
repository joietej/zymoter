import dynamic from "next/dynamic";

const toPascalCase = (value) =>
  `${value?.charAt(0).toUpperCase()}${value?.substring(1)}`;

const useComponent = (folder, component) =>
  dynamic(
    () =>
      import(
        `../components/${folder}/${toPascalCase(component)}`
      ).catch(() => import("../components/Empty")),
    { loading: () => <div>{`loading ${folder}-${component}`}</div> }
  );

export default useComponent;
