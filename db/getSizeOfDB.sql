select
    s.schema_name
    ,sp.grantee user
    ,cast(round(sum(coalesce(t.data_length + t.index_length, 0)) / 1024 / 1024, 3) as char) db_size_mb
    ,sp.has_insert
from
    information_schema.schemata s
    inner join
    information_schema.tables t on s.schema_name = t.table_schema
    inner join (
        select
            spi.grantee
            ,spi.table_schema
            ,max(
                case
                    when spi.privilege_type = 'INSERT' then 1
                    else 0
                end
            ) has_insert
        from
            information_schema.schema_privileges spi
        group by
            spi.grantee
            ,spi.table_schema
    ) sp on s.schema_name = sp.table_schema
group by
    s.schema_name
    ,sp.grantee
    ,sp.has_insert;
