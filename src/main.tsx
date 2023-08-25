import { createRoot } from "react-dom/client";
import { App, IPluginOptions } from "./App.tsx";
import "./index.css";

if (import.meta.env.MODE === "development") {
    const renderElement = document.getElementById("root");
    createRoot(renderElement as HTMLElement).render(<App options={{}} />);
} else {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.DAMAGE_SELECTOR_API = {
        init: (init: { selector: string; options: IPluginOptions }) => {
            const { selector } = init;
            if (selector) {
                const renderElement = document.querySelector(selector);
                if (renderElement) {
                    createRoot(renderElement as HTMLElement).render(
                        <App options={init.options} />
                    );
                }
            }
        },
    };
}
