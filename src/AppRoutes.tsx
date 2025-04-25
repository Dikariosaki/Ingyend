import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Carga diferida de las páginas
const HomePage = lazy(() => import("./pages/HomePage"));
const InspeccionVisual = lazy(
  () => import("./pages/EnsayosEND/inspeccionVisual"),
);
const Ultrasonido = lazy(() => import("./pages/EnsayosEND/ultraSonido"));
const ParticulasMagneticas = lazy(
  () => import("./pages/EnsayosEND/particulasMagneticas"),
);
const LiquidosPenetrantes = lazy(
  () => import("./pages/EnsayosEND/liquidosPenetrantes"),
);
const Termografia = lazy(() => import("./pages/EnsayosEND/termografia"));
const RayosX = lazy(() => import("./pages/EnsayosEND/rayosX"));
const InspeccionPorTorque = lazy(
  () => import("./pages/EnsayosEND/inspeccionPorTorque"),
);
const QuintaRueda = lazy(() => import("./pages/otherServices/inspeccionDeComponentes/quintaRueda"));
const ProximosCursos = lazy(() => import("./pages/otherServices/proximosCursos"));
const CalificacionSoldadores = lazy(() => import("./pages/otherServices/calificacionSoldadores"));
const AuditoriasTecnicas = lazy(() => import("./pages/otherServices/auditoriasTecnicas"));

//const AboutPage = lazy(() => import("./pages/AboutPage"));
//const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Anidamos la ruta de inspección visual bajo "servicios" */}
        <Route path="servicios">
          <Route path="inspeccionVisual" element={<InspeccionVisual />} />
          <Route path="ultrasonido" element={<Ultrasonido />} />
          <Route
            path="particulasMagneticas"
            element={<ParticulasMagneticas />}
          />
          <Route path="liquidosPenetrantes" element={<LiquidosPenetrantes />} />
          <Route path="termografia" element={<Termografia />} />
          <Route path="rayosX" element={<RayosX />} />
          <Route path="inspeccionPorTorque" element={<InspeccionPorTorque />} />
          {/* Opcional: si se ingresa cualquier subruta de "servicios", mostramos InspeccionVisual */}
          {/*<Route path="*" element={<InspeccionVisual />} />*/}
        </Route>
        <Route path="Otros-servicios">
          <Route path="quintaRueda" element={<QuintaRueda />} />
          <Route path="Proximos-cursos" element={<ProximosCursos />} />
          <Route path="Calificacion-Soldadores" element={<CalificacionSoldadores />} />
          <Route path="Auditorias-Tecnicas" element={<AuditoriasTecnicas />} />
        </Route>
        <Route path="about" element={<HomePage />} />
        {/* Ruta comodín para mostrar HomePage en rutas no definidas */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
