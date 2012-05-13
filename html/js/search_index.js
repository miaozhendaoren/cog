var search_data = {"index":{"searchIndex":["cog","cogfile","cogfileerror","errors","missingtemplate","mixins","usestemplates","templatecontext","spechelpers","app","invocation","matchers","templatecontroller","object","code_dir()","copy_default_cogfile()","default_cogfile_path()","for_project()","get_template()","master()","master_cogfile_path()","message()","message()","method_missing()","new()","new()","new()","new()","run()","show_help()","stamp()","template_dir()","using_cogfile()","api"],"info":[["Cog","","Cog.html","",""],["Cog::Cogfile","","Cog/Cogfile.html","","<p>When the <code>Cogfile</code> is processed, <code>self</code> will be the\nsingleton instance of this object.\n"],["Cog::CogfileError","","Cog/CogfileError.html","","<p>For wrapping errors which occur during the processing of a\n<code>Cogfile</code>.\n"],["Cog::Errors","","Cog/Errors.html","",""],["Cog::Errors::MissingTemplate","","Cog/Errors/MissingTemplate.html","","<p>Indiciates an attempt to use a non-existant template.\n"],["Cog::Mixins","","Cog/Mixins.html","","<p>Modules that extend your code generating classes with helper methods.\n<p>Mixins::UsesTemplates has methods …\n\n"],["Cog::Mixins::UsesTemplates","","Cog/Mixins/UsesTemplates.html","","<p>Mixin for classes that can use templates to generate code\n"],["Cog::Mixins::UsesTemplates::TemplateContext","","Cog/Mixins/UsesTemplates/TemplateContext.html","",""],["Cog::SpecHelpers","","Cog/SpecHelpers.html","","<p>Modules and classes to help write specs for testing <code>cog</code>\n<p>Example\n<p>Requiring the helpers will make extra  …\n"],["Cog::SpecHelpers::App","","Cog/SpecHelpers/App.html","","<p>Points to the <code>cog</code> command-line app\n"],["Cog::SpecHelpers::Invocation","","Cog/SpecHelpers/Invocation.html","","<p>Represents a <code>cog</code> command line invocation, which can be tested\nwith <code>RSpec</code> <code>should</code> and <code>should_not</code>\ncustom …\n"],["Cog::SpecHelpers::Matchers","","Cog/SpecHelpers/Matchers.html","","<p>Extra should or should_not matchers for RSpec.\n"],["Cog::TemplateController","","Cog/TemplateController.html","",""],["Object","","Object.html","",""],["code_dir","Cog::Cogfile","Cog/Cogfile.html#method-i-code_dir","(val=nil, opt={})","<p>The directory in which application code can be found. This is where\ngenerated code will go. Probably …\n"],["copy_default_cogfile","Cog","Cog.html#method-c-copy_default_cogfile","(dest)","<p>Make a cogfile at the given destination path.\n"],["default_cogfile_path","Cog::Cogfile","Cog/Cogfile.html#method-c-default_cogfile_path","()","<p>Path to the default <code>Cogfile</code>.\n"],["for_project","Cog::Cogfile","Cog/Cogfile.html#method-c-for_project","()","<p>Loads the default <code>Cogfile</code> for the current project.\n<p>The <code>Cogfile</code> will be looked for in the present working …\n"],["get_template","Cog::Mixins::UsesTemplates","Cog/Mixins/UsesTemplates.html#method-i-get_template","(path)","<p>Get the template with the given name.\n<p>Parameters\n<p><code>path</code> - a path to a template file which is relative to …\n"],["master","Cog::Cogfile","Cog/Cogfile.html#method-c-master","()","<p>Loads the master <code>Cogfile</code>.\n"],["master_cogfile_path","Cog::Cogfile","Cog/Cogfile.html#method-c-master_cogfile_path","()","<p>Path to the master <code>Cogfile</code>.\n"],["message","Cog::CogfileError","Cog/CogfileError.html#method-i-message","()",""],["message","Cog::Errors::MissingTemplate","Cog/Errors/MissingTemplate.html#method-i-message","()",""],["method_missing","Cog::Mixins::UsesTemplates::TemplateContext","Cog/Mixins/UsesTemplates/TemplateContext.html#method-i-method_missing","(meth, *args, &block)",""],["new","Cog::Cogfile","Cog/Cogfile.html#method-c-new","(path)","<p>Initialize from a <code>Cogfile</code> at the given path.\n"],["new","Cog::Mixins::UsesTemplates::TemplateContext","Cog/Mixins/UsesTemplates/TemplateContext.html#method-c-new","(obj, context={})",""],["new","Cog::SpecHelpers::App","Cog/SpecHelpers/App.html#method-c-new","(path_to_cl_app)",""],["new","Cog::TemplateController","Cog/TemplateController.html#method-c-new","(opt={})",""],["run","Cog::SpecHelpers::App","Cog/SpecHelpers/App.html#method-i-run","(*args)","<p>Run cog with the given arguments\n<p>Returns\n<p>An instance of Invocation configured with the arguments. Use should …\n"],["show_help","Cog::SpecHelpers::Matchers","Cog/SpecHelpers/Matchers.html#method-i-show_help","()","<p>The target Invocation should output the default help text\n"],["stamp","Cog::Mixins::UsesTemplates","Cog/Mixins/UsesTemplates.html#method-i-stamp","(path, dest=nil, context={})","<p>Stamp this object using the template at the given path.\n<p>Parameters\n<p><code>path</code> - the path to the template to use …\n"],["template_dir","Cog::Cogfile","Cog/Cogfile.html#method-i-template_dir","(val=nil, opt={})","<p>The directory in which to find ERB template files. This is relative to\nproject_root unless the option …\n"],["using_cogfile","Cog::Mixins::UsesTemplates","Cog/Mixins/UsesTemplates.html#method-i-using_cogfile","(cogfile)","<p>Use an alternate Cogfile\n"],["API","","API_rdoc.html","","<p>cog API docs\n<p><code>cog</code> is a command line utility that makes it a bit easier to\norganize a project which uses …\n"]],"longSearchIndex":["cog","cog::cogfile","cog::cogfileerror","cog::errors","cog::errors::missingtemplate","cog::mixins","cog::mixins::usestemplates","cog::mixins::usestemplates::templatecontext","cog::spechelpers","cog::spechelpers::app","cog::spechelpers::invocation","cog::spechelpers::matchers","cog::templatecontroller","object","cog::cogfile#code_dir()","cog::copy_default_cogfile()","cog::cogfile::default_cogfile_path()","cog::cogfile::for_project()","cog::mixins::usestemplates#get_template()","cog::cogfile::master()","cog::cogfile::master_cogfile_path()","cog::cogfileerror#message()","cog::errors::missingtemplate#message()","cog::mixins::usestemplates::templatecontext#method_missing()","cog::cogfile::new()","cog::mixins::usestemplates::templatecontext::new()","cog::spechelpers::app::new()","cog::templatecontroller::new()","cog::spechelpers::app#run()","cog::spechelpers::matchers#show_help()","cog::mixins::usestemplates#stamp()","cog::cogfile#template_dir()","cog::mixins::usestemplates#using_cogfile()",""]}}