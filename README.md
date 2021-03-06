# [SigScale](http://www.sigscale.org) UseKeeper

[Open Issues](https://sigscale.atlassian.net/projects/USE/issues/?filter=allopenissues "Open Issues")  
[Create Issue](https://sigscale.atlassian.net/secure/CreateIssue!default.jspa?pid=10308&issuetype=10000 "Create Issue")

UseKeeper provides a storage and reporting service for usage records (e.g. "CDR")
as a Component in the [TM Forum](https://www.tmforum.org)
Open Digital Architecture ([ODA](https://www.tmforum.org/oda)).

![component](https://raw.githubusercontent.com/sigscale/usekeeper/master/doc/component.png)

### [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
UseKeeper's core function exposes the [TM Forum](https://www.tmforum.org)
[Open API](https://www.tmforum.org/open-apis/) for Usage Management
([TMF635](https://www.tmforum.org/resources/interface/tmf635-usage-management-api-rest-specification-r14-5-0/)).
Users may create Usage Specications which describe individual Usage types.
Individual Usages may be created and reported on afterwards.

### [Web Components](https://www.webcomponents.org/)
A web frontend built with Google [Polymer](https://www.polymer-project.org) for
[material design](https://material.io/guidelines/material-design/introduction.html) 
provides simple guided management of Usage Specifications and paginated filtered
views of Usage records.

### [Erlang/OTP](http://www.erlang.org)
All operations may be performed using the Erlang public API, either manually
on the command line [shell](http://erlang.org/doc/man/shell.html), or through
custom Erlang module development.

### [IPDR](https://www.tmforum.org/ipdr)
The Internet Protocol (IP) Detail Record (IPDR) is an industry standard
exchange format for usage records within the Internet Service Provider (ISP)
ecosystem. Usage records may be exported as IPDR format logs which may be
transfered with SFTP/SCP for offline processing.

