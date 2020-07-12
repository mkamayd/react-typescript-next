import { isArray, isNumber } from "util";

type ValueLike = number[] | Set<number> | number;
export default function Card(props:{title:string, value:ValueLike}) {
    const { title, value } = props;
    const numbersTxt = isArray(value) ? value.join(','): ( isNumber(value)? value : [...value].join(','));
    return <div className="card">
        <h3>{title}</h3>
        <p>{numbersTxt}</p>
        <style jsx>{`
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

      `}</style>
    </div>
};