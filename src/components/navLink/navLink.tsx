import { Slot, component$ } from "@builder.io/qwik";
import { Link, useLocation, type LinkProps } from "@builder.io/qwik-city";

type NavLinkProps = LinkProps & { activeClass?: string };

export const NavLink = component$(({ activeClass, ...props }: NavLinkProps) => {
  const location = useLocation();
  const toPathname = props.href ?? "";
  const locationPathname = location.url.pathname;

  // Ajoute un slash à la fin de toPathname si ce n'est pas déjà le cas
  const normalizedToPathname = toPathname.endsWith("/")
    ? toPathname
    : `${toPathname}/`;

  // Vérifie si l'URL actuelle commence par l'URL cible
  const isActive = locationPathname.startsWith(normalizedToPathname);

  return (
    <Link {...props} class={`${isActive ? activeClass : props.class}`}>
      <Slot />
    </Link>
  );
});
