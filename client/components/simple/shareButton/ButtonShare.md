Button example:

```js
import { FaTimes } from "react-icons/fa";

const socialButtons = [
  {
    icon: 'f',
    title: '',
    link: '#',
    key: 1,
  },
  {
    icon: 'v',
    title: '',
    link: '#',
    key: 2,
  },
  {
    icon: 't',
    title: '',
    link: '#',
    key: 3,
  },
];

<div>
  <ButtonShare socials={socialButtons} closeIcon={<FaTimes />}>
    SH
  </ButtonShare>
</div>
```

---