Section example: *(Try to resize)*

```jsx
const { SectionCell } = Section;

<Section tagName="article">
  <SectionCell md={4} lg={12} style={{ padding: '0 8px' }}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </SectionCell>
  <SectionCell md={4} style={{ padding: '0 8px' }}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </SectionCell>
  <SectionCell md={4} style={{ padding: '0 8px' }}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </SectionCell>
</Section>
```

### Section.SectionCell
*SectionCell component should be used inside Section component only*

#### Props:

| Prop name       | Type           | Default       | Description                                       |
| :------------- | :------------- | :------------ | :------------------------------------------------- |
| <span class="rsg--name-37">`xs`</span> | <span class="rsg--type-39">`number`</span> | none | <div class="rsg--para-40">Min value: 1, Max value: 12. Defines the block width for **extra small** screens</div> |
| <span class="rsg--name-37">`sm`</span> | <span class="rsg--type-39">`number`</span> | none | <div class="rsg--para-40">Min value: 1, Max value: 12. Defines the block width for **small** screens</div> |
| <span class="rsg--name-37">`md`</span> | <span class="rsg--type-39">`number`</span> | none | <div class="rsg--para-40">Min value: 1, Max value: 12. Defines the block width for **medium** screens</div> |
| <span class="rsg--name-37">`lg`</span> | <span class="rsg--type-39">`number`</span> | none | <div class="rsg--para-40">Min value: 1, Max value: 12. Defines the block width for **large** screens</div> |
| <span class="rsg--name-37">`xl`</span> | <span class="rsg--type-39">`number`</span> | none | <div class="rsg--para-40">Min value: 1, Max value: 12. Defines the block width for **extra large** screens</div> |

#### Screen sizes:

| Size name      | Screen size from:    | Media query example          |
| :------------- | :------------------- | :--------------------------- |
| xs             | 0px                  | `@media (min-width: 0)`      |
| sm             | 576px                | `@media (min-width: 576px)`  |
| md             | 768px                | `@media (min-width: 768px)`  |
| lg             | 992px                | `@media (min-width: 992px)`  |
| xl             | 1200px               | `@media (min-width: 1200px)` |