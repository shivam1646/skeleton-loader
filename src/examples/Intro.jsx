function Intro() {
  return (
    <>
      <h1>Skeleton loader</h1>
      <p>
        The skeleton component can be used to show the users a rough structure
        of the information that is going to appear on the page until the actual
        content is loaded. It can be used in 2 ways :-
      </p>
      <p style={{ paddingLeft: "1rem" }}>
        1. Wrap your component with the skeleton loader. The skeleton loader is
        automatically sized to the correct dimensions based on your content. It
        will also handle replacing the skeleton with the actual content once
        loading is complete.
      </p>
      <pre style={{ paddingLeft: "1rem" }}>
        <code>
          {"<Skeleton loading={isLoading}><my-component /></Skeleton>"}
        </code>
      </pre>
      <p style={{ paddingLeft: "1rem" }}>
        2. Use it as a standalone component with the default dimensions or
        specify dimensions manually.
      </p>
      <pre style={{ paddingLeft: "1rem" }}>
        <code>{'isLoading ? <Skeleton type="text" /> : <my-component />'}</code>
      </pre>
      <p>
        The flexibility of the component allows you to load one part of the UI
        before another or in an incremental fashion. Additionally, you can
        personalise the component as per your needs by specifying any of the
        following props.
      </p>
      <p style={{ paddingLeft: "1rem" }}>
        1. <strong>type</strong>(string) - circle, square, text <br /> 2.{" "}
        <strong>animation</strong>(string) - pulse, wave <br /> 3.{" "}
        <strong>rows</strong>(integer) - number of rows <br /> 4.{" "}
        <strong>inline</strong>
        (boolean) - display skeleton side by side <br /> 5.{" "}
        <strong>classes</strong>(string) - list of classes <br /> 6.{" "}
        <strong>color</strong>
        (string) <br /> 7. <strong>dimensions</strong>(width, height)
      </p>
    </>
  );
}

export default Intro;
