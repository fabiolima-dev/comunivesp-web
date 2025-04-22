function Tags() {
  const userEspecialiadades = [
    "Java Script",
    "CSS",
    "HTML",
    "SQL",
    "Pokemon FireRed",
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {userEspecialiadades.map((tag, index) => (
        <span
          key={index}
          className="mb-10 bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

//ToDo: Get from db user tags

export default Tags;
