export const people = [
  {
    id: "1",
    name: "aio",
    age: 18,
    gender: "male",
  },
  { id: "2", name: "aio1", age: 18, gender: "male" },
  { id: "3", name: "aio2", age: 18, gender: "male" },
  { id: "4", name: "aio3", age: 18, gender: "male" },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === String(id));
  return filteredPeople[0];
};
