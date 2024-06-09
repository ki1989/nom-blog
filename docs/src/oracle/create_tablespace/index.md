---
title: 表領域作成方法
description: テスト記事
---

[[toc]]

```sql
--表領域作成
CREATE TABLESPACE mae DATAFILE
    'D:\app\oradata\ORA11GR2\MAE.dbf' SIZE 10M
        AUTOEXTEND ON NEXT 10M MAXSIZE UNLIMITED
SEGMENT SPACE MANAGEMENT AUTO;
```

```sql
--ユーザ作成
CREATE USER mae IDENTIFIED BY mae
    DEFAULT TABLESPACE mae
    TEMPORARY TABLESPACE temp;
```

```sql
--ログインできるようにユーザ権限設定

GRANT connect TO mae;

GRANT resource TO mae;

GRANT dba TO mae;
```