import { GenreResponseProps } from "../App";
import { Button } from "./Button";

import '../styles/sidebar.scss';

interface ISidebarProps {
  genres: GenreResponseProps[]
  onClick: Function
  selectedGenreId: number
}

export function SideBar(props: ISidebarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.onClick(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}