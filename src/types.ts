type TestIdsObj = Record<string, string>

export type Assoc = (prop: string, value: string, obj: TestIdsObj) => TestIdsObj

export type Reduce = (
  reducer: (acc: TestIdsObj, val: string) => TestIdsObj,
  initialValue: TestIdsObj,
) => (list: string[]) => TestIdsObj
