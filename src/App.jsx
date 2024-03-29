import { motion } from "framer-motion";
import "./App.css";
function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-36  text-center">
          <div className="text-4xl">Hola, bienvenido a mi página de React!</div>
          <div className="text-xl mt-4">
            En esta página podras aprender y ver tanto conceptos clave de
            React, como técnicas un poco mas avanzadas o características
            recientemente añadidas
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default App;
