Form example:

```jsx
import { Button } from 'mcs-ui-kit';

const { Input, SearchInput } = Form;

const handleSubmit = e => console.log(e);

<div>
  <Form onSubmit={handleSubmit}>
    <Input type="text" name="login" defaultValue="John" />
    <Input type="text" name="password" defaultValue="John" />
    <Button type="primary" htmlType="submit">Submit</Button>
  </Form>

  <h1 style={{ margin: 30 }}>SearchInput example:</h1>

  <Form onSubmit={handleSubmit}>
    <SearchInput buttonText="Найти" name="search" />
  </Form>

  <h1 style={{ margin: 30 }}>SearchInput example (with prefix):</h1>

  <Form onSubmit={handleSubmit}>
    <SearchInput buttonText="Найти" name="search" prefix='S' />
  </Form>
</div>
```

### Form.Input
*Input component should be used inside Form component only*

#### Props:

| Prop name       | Type           | Default       | Description                                       |
| :------------- | :------------- | :------------ | :------------------------------------------------- |
| <span class="rsg--name-37">`type`</span> | <span class="rsg--type-39">`string`</span> | none | <div class="rsg--para-40">Html type of input</div> |
| <span class="rsg--name-37">`name`</span> | <span class="rsg--type-39">`string`</span> | none | <div class="rsg--para-40">You must provide this prop due to proper storing value inside Form component state</div> |
| <span class="rsg--name-37">`defaultValue`</span> | <span class="rsg--type-39">`string`</span> | none | <div class="rsg--para-40">Default Value of input</div> |

### Form.SearchInput
*SearchInput component should be used inside Form component only*

#### Props:

| Prop name       | Type           | Default       | Description                                       |
| :------------- | :------------- | :------------ | :------------------------------------------------- |
| <span class="rsg--name-37">`buttonText`</span> | <span class="rsg--type-39">`string`</span> | none | <div class="rsg--para-40">Define the search button text</div> |
| <span class="rsg--name-37">`prefix`</span> | <span class="rsg--type-39">`union`</span> | none | <div class="rsg--para-40">Define prefix for input field. E.g. search icon</div> |

---