import React from 'react';

export default function NavList({ data }: any) {
  if (data.length > 0) {
    const list = data.map(({ title, children }: any, key: number) => {
      return (
        <dl key={key}>
          {title && <dt>{title}</dt>}
          {children.map(({ url, name, hasNew = false }: any, key: number) => {
            return (
              <dd key={key}>
                <a href={url}>
                  {name}
                  {hasNew && <i className="icon-new"></i>}
                </a>
              </dd>
            );
          })}
        </dl>
      );
    });
    return <div className="sys-nav-sub">{list}</div>;
  }
  return null;
}
