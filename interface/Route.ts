// export default interface Route {
//   name: string;
//   path: string;
//   type: string;
// }

interface IVisualizer {
  name: string;
  path: string;
  type: "Visualizer";
}

interface IAlgorithm {
  name: string;
  path: string;
  type: "Algorithm";
  category: Category;
}

type Category = "Array" | "2 pointer" | "";

type Route = IVisualizer | IAlgorithm;

export default Route;
