import content from "../assets/content.json";

const Title = () => {
  return (
    <h1 className="text-center text-5xl font-bold text-slate-900 px-10">
      <b>
        <i className="text-teal-600">{content.nyc}</i>{" "}
        {/* text color meets WCAG minimum contrast ratio thresholds */}
      </b>
      {content.title}
      {content.emoji}
    </h1>
  );
};

export default Title;
