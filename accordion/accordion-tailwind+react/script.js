
    // Accordion Item Component
    const AccordionItem = ({ title, content, isOpen }) => {
      return React.createElement(
        "details",
        { name:"Udenbaguse", className: "border-b bg-white shadow-sm", open: isOpen },
        React.createElement(
          "summary",
          { className: "cursor-pointer bg-blue-200 text-left text-lg p-3 hover:bg-gray-400 hover:text-white open:bg-gray-400 open:text-white" },
          title
        ),
        React.createElement("p", { className: "p-3 text-gray-700" }, content)
      );
    };

    // Accordion Component
    const content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit dicta deserunt cum aut fugiat amet necessitatibus magni officia, veritatis quis accusamus harum ullam numquam, aperiam exercitationem facere, fuga est voluptatem.";
    const Accordion = () => {
      return React.createElement(
        "div",
        { className: "w-full max-w-2xl font-serif mx-auto mt-5" },
        React.createElement(AccordionItem, {
          title: "Accordion Item #1",
          content: content,
          isOpen: true,
        }),
        React.createElement(AccordionItem, {
          title: "Accordion Item #2",
          content: content,
        }),
        React.createElement(AccordionItem, {
          title: "Accordion Item #3",
          content: content,
        })
      );
    };

    // Render App
    ReactDOM.render(
      React.createElement(Accordion),
      document.getElementById("root")
    );