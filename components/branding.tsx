export default function Branding() {
    return <>
        <h1 className="title">
          Numbers
        </h1>

        <p className="description">
          by Miguel Gutierrez Kamayd
        </p>
        <style jsx>{`
         .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>
    </>
};