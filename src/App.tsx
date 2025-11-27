import css from "./App.module.scss";

export default function App() {
    return (
        <div className={css.app} data-text-preset="3">
            <button data-text-preset="6">Request Beta Access</button>

            <h1 data-text-preset="1">
                A <b>super solution</b> for your <b>business.</b>
            </h1>

            <p>
                Our marketing and sales automations help you scale your outreach
                to get more leads for your company.
            </p>

            <button data-text-preset="6">Request Beta Access</button>

            <ul>
                <li>
                    <div data-text-preset="2">
                        <b>2K+</b>
                    </div>
                    <div data-text-preset="7">Companies</div>
                </li>
                <li>
                    <div data-text-preset="2">
                        <b>8</b>
                    </div>
                    <div data-text-preset="7">Languages</div>
                </li>
                <li>
                    <div data-text-preset="2">
                        <b>1.2M</b>
                    </div>
                    <div data-text-preset="7">Leads</div>
                </li>
            </ul>

            <h2 data-text-preset="2">
                It just <b>works.</b>
            </h2>

            <figure>
                <blockquote>
                    I really like how it is an all-in-one solution that handle
                    many of the tasks that you would normally need separate
                    tools to do the same job. This thing is a miracle worker.
                </blockquote>

                <figcaption>
                    <div data-text-preset="4">Jeremy Robinson</div>
                    <div data-text-preset="7">CMO, Fylo</div>
                </figcaption>
            </figure>

            <div data-text-preset="8">Copyright - Suite</div>
        </div>
    );
}
