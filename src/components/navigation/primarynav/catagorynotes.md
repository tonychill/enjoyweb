## Filter

## Catagories

- Trending
- Places
- Homes
- Experiences
- Concierge
- Food
- Culture
- Chill/Relax/Wellness
- Nature
- Events
- Love
- Shopping
- Tips

## My trips

---

## ------------------------------------ FORMATS ------------------------------------

- Video
- Guides
- Events
- Trips

Note: Remember to go through tripAdvisor and come up with ideas and topics.

{
id: 1,
name: "Tips",
route: "/stories/[scat]",
as: "/stories/tips",
class: "navdisc"
},
{
id: 2,
name: "Homes",
route: "/plan",
as: "",
class: "navplan"
},
{
id: 3,
name: "Experiences",
route: "/experiences",
as: "",
class: "navexp"
},
{
id: 4,
name: "Services",
route: "/services",
as: "",
class: "navsvc"
},
{
id: 5,
name: "Messages",
route: "/messages",
as: "",
class: "navmes"
},
{
id: 6,
name: "Shopping",
route: "/shopping",
as: "",
class: "navmes"
},
{
id: 7,
name: "Events",
route: "/events",
as: "",
class: "navmes"
},
{
id: 8,
name: "Places",
route: "/places",
as: "",
class: "navmes"
},
{
id: 9,
name: "Groups",
route: "/packages",
as: "",
class: "navmes"
},
{
id: 10,
name: "Food",
route: "/packages",
as: "",
class: "navmes"
},
{
id: 11,
name: "Packages",
route: "/packages",
as: "",
class: "navmes"
},
{
id: 12,
name: "Tripcasts",
route: "/packages",
as: "",
class: "navmes"
}

<SideLink key={link.id} className="">
        <a href={link.route.toString()}>
          <span>{link.name}</span>
        </a>
      </SideLink>

export default function SideLinks() {
const pids = ["id1", "id2", "id3"];
{
catlink.map(pid => (

<Link href="/post/[pid]" as={`/post/${pid.as}`}>
<SideLink key={catlink.id} className="">
<a>
<span>{catlink.name}</span>
</a>
</SideLink>
</Link>
));
}

return <>{pids}</>;
}

## SideNav Catagories/Groupings

Friends
Categories
Groups
Trips
