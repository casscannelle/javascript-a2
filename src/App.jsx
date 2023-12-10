import { useState } from "react";

function FilterableBandTable({ bands }) {
  const [filterText, setFilterText] = useState("");
  const [activeOnly, setActiveOnly] = useState(false);

  return (
    <div>
      <SearchBar
        filterText={filterText}
        activeOnly={activeOnly}
        onFilterTextChange={setFilterText}
        onActiveOnlyChange={setActiveOnly}
      />
      <BandTable
        bands={bands}
        filterText={filterText}
        activeOnly={activeOnly}
      />
    </div>
  );
}

function BandOriginRow({ origin }) {
  return (
    <tr>
      <th colSpan="2">{origin}</th>
    </tr>
  );
}

function BandRow({ band }) {
  const name = band.active ? (
    band.name
  ) : (
    <span style={{ color: "red" }}>{band.name}</span>
  );

  return (
    <tr key={band.name}>
      <td>{name}</td>
      <td>{band.albuns}</td>
    </tr>
  );
}

function BandTable({ bands, filterText, activeOnly }) {
  const rows = [];
  let lastOrigin = null;

  bands.forEach((band) => {
    if (band.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (activeOnly && !band.active) {
      return;
    }
    if (band.origin !== lastOrigin) {
      rows.push(<BandOriginRow origin={band.origin} key={band.origin} />);
    }
    rows.push(<BandRow band={band} key={band.name} />);
    lastOrigin = band.origin;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Banda</th>
          <th>Álbuns</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({
  filterText,
  activeOnly,
  onFilterTextChange,
  onActiveOnlyChange,
}) {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Pesquisar"
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={activeOnly}
          onChange={(e) => onActiveOnlyChange(e.target.checked)}
        />{" "}
        Mostrar apenas bandas ativas
      </label>
    </form>
  );
}

const BANDS = [
  { origin: "Inglaterra", albuns: 13, active: false, name: "The Beatles" },
  { origin: "Inglaterra", albuns: 15, active: true, name: "Queen" },
  { origin: "Inglaterra", albuns: 7, active: false, name: "Oasis" },
  { origin: "EUA", albuns: 7, active: true, name: "The Killers" },
  { origin: "EUA", albuns: 24, active: false, name: "Kiss" },
  { origin: "EUA", albuns: 11, active: true, name: "Foo Fighters" },
];

export default function App() {
  return <FilterableBandTable bands={BANDS} />;
}
