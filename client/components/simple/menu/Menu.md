Menu example:

```js
  const { Logo, Item, DropdownItem } = Menu;

  const dropdownItems = [
    { title: 'Project X', key: 'sub1' },
    { title: 'New project', key: 'sub2' },
    { title: 'Huge project', key: 'sub3' },
  ];
  <div>
    <Menu theme="dark">
      <Logo> Company Logo </Logo>
      <Item> Home </Item>
      <DropdownItem subItems={dropdownItems}> Portfolio </DropdownItem>
      <Item> Blog </Item>
      <Item> Contacts </Item>
    </Menu>
    <br />
    <br />
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
```

**Note: Any other component inside the menu will be aligned to the right.**

### Menu.Item
*Item component should be used inside Menu component only*

#### Props:

| Prop name       | Type           | Default       | Description                                       |
| :------------- | :------------- | :------------ | :------------------------------------------------- |
| <span class="rsg--name-37">`textColor`</span> | <span class="rsg--type-39">`string`</span> | #000 | <div class="rsg--para-40">Defines the text color</div> |
| <span class="rsg--name-37">`to`</span> | <span class="rsg--type-39">`string`</span> | # | <div class="rsg--para-40">URL</div> |







### Menu.DropdownItem
*DropdownItem component should be used inside Menu component only*

#### Props:

| Prop name       | Type           | Default       | Description                                        |
| :------------- | :------------- | :------------ | :------------------------------------------------- |
| <span class="rsg--name-37">`subItems`</span>      | <span class="rsg--type-39">`array`</span>          | none         | <div class="rsg--para-40">List of dropdown items.</div>   |

#### Dropdown Item

*Dropdown Item should use the follow structure:*

```js static
{
  title: 'Submenu Title',
  key: 'Submenu Key',
}
```






### Menu.Logo
*Logo component should be used inside Menu component only*

#### Props:

| Prop name       | Type           | Default       | Description                                        |
| :------------- | :------------- | :------------ | :------------------------------------------------- |
| <span class="rsg--name-37">`textColor`</span>      | <span class="rsg--type-39">`string`</span>          | #000         | <div class="rsg--para-40">Defines the text color</div>   |
| <span class="rsg--name-37">`src`</span>      | <span class="rsg--type-39">`string`</span>          | none         | <div class="rsg--para-40">Logo picture</div>   |
| <span class="rsg--name-37">`type`</span>      | <span class="rsg--type-39">`string`</span>          | none         | <div class="rsg--para-40">Must be specified in order to define a text logo or image logo</div>   |

---