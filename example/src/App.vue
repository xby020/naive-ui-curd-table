<template>
  <div class="w-screen h-screen bg-gray-600 p-4">
    <div class="w-full h-full">
      <n-curd-table
        :dark="true"
        table-title="表格"
        :columns="columns"
      ></n-curd-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NCurdTable } from '@xby020/naive-ui-curd-table';
import type {
  CurdTableItem,
  CurdTableRawData
} from '@xby020/naive-ui-curd-table';

interface DataRaw {
  name: string;
  age: number;
  address: string;
  affair: string;
}

const data = ref<DataRaw[]>([
  {
    name: 'Jack',
    age: 18,
    address: 'some where',
    affair: 'worker'
  }
]);

const columns = ref<CurdTableItem<DataRaw>[]>([
  {
    type: 'text',
    key: 'name',
    show: true,
    column: {
      title: '姓名',
      key: 'name',
      width: 100,
      render(data, index) {
        return h(
          'span',
          { class: 'text-2xl font-bold text-green-200' },
          data.name
        );
      }
    }
  },
  {
    type: 'number',
    key: 'age',
    show: true,
    column: {
      title: '年龄',
      key: 'age',
      width: 100
    },
    query: true,
    queryLable: '年龄'
  },
  {
    type: 'select',
    key: 'affair',
    show: true,
    column: {
      title: '职业',
      key: 'affair',
      width: 100
    },
    query: true,
    queryLable: '职业',
    queryOptions: [
      {
        label: '工人',
        value: 'worker'
      },
      {
        label: '农民',
        value: 'farmer',
        style: 'amber-text'
      },
      {
        label: '医生',
        value: 'doctor',
        disabled: true
      }
    ]
  },
  {
    type: 'multSelect',
    key: 'wannaAffair',
    query: true,
    queryLable: '职业选择',
    queryOptions: [
      {
        label: 'Rubber Soul',
        key: 'Rubber Soul',
        children: [
          {
            label: "Everybody's Got Something to Hide Except Me and My Monkey",
            key: "Everybody's Got Something to Hide Except Me and My Monkey"
          },
          {
            label: 'Drive My Car',
            key: 'Drive My Car',
            disabled: true
          },
          {
            label: 'Norwegian Wood',
            key: 'Norwegian Wood'
          },
          {
            label: "You Won't See",
            key: "You Won't See",
            disabled: true
          },
          {
            label: 'Nowhere Man',
            key: 'Nowhere Man'
          },
          {
            label: 'Think For Yourself',
            key: 'Think For Yourself'
          },
          {
            label: 'The Word',
            key: 'The Word'
          },
          {
            label: 'Michelle',
            key: 'Michelle',
            disabled: true
          },
          {
            label: 'What goes on',
            key: 'What goes on'
          },
          {
            label: 'Girl',
            key: 'Girl'
          },
          {
            label: "I'm looking through you",
            key: "I'm looking through you"
          },
          {
            label: 'In My Life',
            key: 'In My Life'
          },
          {
            label: 'Wait',
            key: 'Wait'
          }
        ]
      },
      {
        label: 'Let It Be',
        key: 'Let It Be Album',
        children: [
          {
            label: 'Two Of Us',
            key: 'Two Of Us'
          },
          {
            label: 'Dig A Pony',
            key: 'Dig A Pony'
          },
          {
            label: 'Across The Universe',
            key: 'Across The Universe'
          },
          {
            label: 'I Me Mine',
            key: 'I Me Mine'
          },
          {
            label: 'Dig It',
            key: 'Dig It'
          },
          {
            label: 'Let It Be',
            key: 'Let It Be'
          },
          {
            label: 'Maggie Mae',
            key: 'Maggie Mae'
          },
          {
            label: "I've Got A Feeling",
            key: "I've Got A Feeling"
          },
          {
            label: 'One After 909',
            key: 'One After 909'
          },
          {
            label: 'The Long And Winding Road',
            key: 'The Long And Winding Road'
          },
          {
            label: 'For You Blue',
            key: 'For You Blue'
          },
          {
            label: 'Get Back',
            key: 'Get Back'
          }
        ]
      }
    ]
  }
]);
</script>

<style scoped lang="pcss">
.amber-text {
  @apply text-amber-400;
}
</style>
