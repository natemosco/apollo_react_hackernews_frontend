import React from "react";
import Link from "./Link";

export default function LinkList() {
    const linksToRender = [
        {
            id: "1",
            description: "Prisma turns a database into a GraphQL API",
            url: "https://wwww.prismagrpahql.com",
        },
        {
            id: "2",
            description: "Current GraphQL client being explored",
            url: "https://www.apollographql.com/docs/react/",
        },
    ];

    return (
        <div>
            {linksToRender.map((link) => {
                <Link key={link.id} link={link} />;
            })}
        </div>
    );
}
