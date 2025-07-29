import { useContext } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";

export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext);
  return (
    <>
      {loading.state ? (
        <p>{loading.message}</p>
      ) : (
        <>
          <div className="grid place-items-center h-screen">
            <Header />
            <main>
              <section>
                <WeatherBoard />
              </section>
            </main>
          </div>
        </>
      )}
    </>
  );
}
