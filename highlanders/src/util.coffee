hlr.nameOf = (id) ->
    if typeof id is 'number'
        return SESSION.users(id)?.originalName ? sys.name(id)
    else return id

hlr.namelOf = (id) -> hlr.nameOf(id).toLowerCase()
hlr.error = (str) -> throw new Error(str)
hlr.assert = (condition, str) -> hlr.error(str) unless condition

hlr.an = (str) ->
    if str[0] in ['a', 'e', 'u', 'i', 'o']
        return "an #{str}"
    else return "a #{str}"
