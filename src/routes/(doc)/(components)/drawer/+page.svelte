<script lang="ts">
  import Article from '$components/Article.svelte';
  import Button from '$lib/components/button/Button.svelte';
  import Codeblock from '$components/Codeblock.svelte';
  import DocSection from '$components/DocSection.svelte';
  import { Drawer, DrawerContent } from '$lib/components/drawer/index.js';
  import CodeInline from '$components/CodeInline.svelte';

  export let data;
</script>

<Article title="Drawer">
  <svelte:fragment slot="description">
    A drawer provides an effective way to display content that needs to be accessed easily but that
    is not the main focus of the page
    <br />
    <br />
    Drawers are often used for navigation, search, and data filters. They can also be used to display
    additional content such as a shopping cart or to provide a form for gathering user information.
  </svelte:fragment>
  <DocSection title="Basic Drawer">
    <svelte:fragment slot="description">
      To create a basic drawer, you can use the <CodeInline>Drawer</CodeInline> component and the
      <CodeInline>DrawerContent</CodeInline> component.
    </svelte:fragment>
    <Codeblock code={data.basicDrawer} language="svelte">
      <Drawer let:elements={{ trigger }}>
        <Button melted={trigger}>Open drawer</Button>
        <DrawerContent
          slot="content"
          title="Drawer title"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
          let:elements={{ close }}
        >
          <Button melted={close}>Close drawer</Button>
        </DrawerContent>
      </Drawer>
    </Codeblock>
  </DocSection>
  <DocSection title="Components" class="mb-0">
    <svelte:fragment slot="description">
      We'll go over the two main components that make up a drawer.
    </svelte:fragment>
  </DocSection>
  <DocSection title="Drawer" class="mb-0" childLevel={1}>
    <svelte:fragment slot="description">
      The <CodeInline>Drawer</CodeInline> component is the main component that is used to create a drawer.
      It is responsible for managing the state of the drawer and for rendering the
      <CodeInline>DrawerContent</CodeInline> component.
    </svelte:fragment>
  </DocSection>
  <DocSection title="Main slot" class="mb-0" childLevel={2}>
    <svelte:fragment slot="description">
      The <CodeInline>Drawer</CodeInline> component has a <CodeInline>main</CodeInline> slot that is
      used to render the
      <em>trigger element</em>. The trigger element is the element that will open the drawer when
      clicked.
      <br />
      <br />
      The <CodeInline>main</CodeInline> slot exposes a <CodeInline>states</CodeInline> props that contains
      the following properties:
      <ul class="my-2 ml-4 list-disc">
        <li>
          <CodeInline>trigger</CodeInline>: Assign to a clickable element to <em>open</em> the drawer
          on click.
        </li>
      </ul>
    </svelte:fragment>
    <Codeblock code={data.drawerMainSlot} language="svelte" />
  </DocSection>
  <DocSection title="Content slot" childLevel={2}>
    <svelte:fragment slot="description">
      The <CodeInline>Drawer</CodeInline> component has a <CodeInline>content</CodeInline> slot that
      is used to render the content of the drawer <em>pane</em>.
      <br />
      <br />
      The <CodeInline>content</CodeInline> slot exposes a the following props:
      <ul class="my-2">
        <li>
          - <CodeInline>elements</CodeInline>
          <ul class="mb-6 ml-8 mt-2 list-disc space-y-1">
            <li>
              <CodeInline>title</CodeInline>: The title of the drawer. Used for accessibility.
            </li>
            <li>
              <CodeInline>description</CodeInline>: The description of the drawer. Used for
              accessibility.
            </li>
          </ul>
        </li>
        <li>
          - <CodeInline>states</CodeInline>
          <ul class="ml-8 mt-2 list-disc space-y-1">
            <li>
              <CodeInline>close</CodeInline>: Assign to a clickable element to <em>close</em> the drawer
              on click.
            </li>
            <li>
              <CodeInline>setOpen</CodeInline>: A function to set the <CodeInline>open</CodeInline> state
              of the drawer.
            </li>
          </ul>
        </li>
      </ul>
    </svelte:fragment>
    <Codeblock code={data.drawerContentSlot} language="svelte" />
  </DocSection>
  <DocSection title="DrawerContent" childLevel={1}>
    <svelte:fragment slot="description">
      The <CodeInline>DrawerContent</CodeInline> component is responsible for rendering the title, description,
      close button and content of the drawer. The <CodeInline>DrawerContent</CodeInline> component should
      always be rendered inside of the
      <CodeInline>content</CodeInline> slot of the <CodeInline>Drawer</CodeInline> component.
      <br />
      <br />
      The <CodeInline>DrawerContent</CodeInline> component has 3 properties:
      <ul class="ml-8 mt-2 list-disc space-y-1">
        <li>
          <CodeInline>title</CodeInline>: The title of the drawer. Used for accessibility.
        </li>
        <li>
          <CodeInline>description</CodeInline>: The description of the drawer. Used for
          accessibility.
        </li>
        <li>
          <CodeInline>hideCloseButton</CodeInline>: A boolean that determines whether or not to hide
          the close button.
        </li>
      </ul>
    </svelte:fragment>
    <Codeblock code={data.drawerContentComponent} language="svelte" />
  </DocSection>
</Article>
