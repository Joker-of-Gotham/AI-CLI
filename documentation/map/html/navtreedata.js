/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "AI-CLI", "index.html", [
    [ "RFC: Gemini CLI A2A Development-Tool Extension", "md_packages_2a2a-server_2development-extension-rfc.html", [
      [ "1. Introduction", "md_packages_2a2a-server_2development-extension-rfc.html#autotoc_md1", [
        [ "1.1 Overview", "md_packages_2a2a-server_2development-extension-rfc.html#autotoc_md2", null ],
        [ "1.2 Motivation", "md_packages_2a2a-server_2development-extension-rfc.html#autotoc_md3", null ]
      ] ],
      [ "2. Communication Flow", "md_packages_2a2a-server_2development-extension-rfc.html#autotoc_md4", [
        [ "2.1 Asynchronous Responses and Notifications", "md_packages_2a2a-server_2development-extension-rfc.html#autotoc_md5", null ]
      ] ],
      [ "3. The <span class=\"tt\">development-tool</span> extension", "md_packages_2a2a-server_2development-extension-rfc.html#autotoc_md6", [
        [ "3.1 Overview", "md_packages_2a2a-server_2development-extension-rfc.html#autotoc_md7", null ],
        [ "3.2 Schema Definitions", "md_packages_2a2a-server_2development-extension-rfc.html#autotoc_md8", null ],
        [ "3.3 Method Definitions", "md_packages_2a2a-server_2development-extension-rfc.html#autotoc_md9", null ]
      ] ],
      [ "4. Separation of Concerns", "md_packages_2a2a-server_2development-extension-rfc.html#autotoc_md10", null ],
      [ "Appendix", "md_packages_2a2a-server_2development-extension-rfc.html#autotoc_md11", [
        [ "A. Example Interaction Flow", "md_packages_2a2a-server_2development-extension-rfc.html#autotoc_md12", null ]
      ] ]
    ] ],
    [ "index.ts", "md_packages_2a2a-server_2index_8ts.html", [
      [ "功能", "md_packages_2a2a-server_2index_8ts.html#autotoc_md14", null ],
      [ "导出内容", "md_packages_2a2a-server_2index_8ts.html#autotoc_md15", null ]
    ] ],
    [ "src/agent/executor.ts", "md_packages_2a2a-server_2src_2agent_2executor_8ts.html", [
      [ "主要类和功能", "md_packages_2a2a-server_2src_2agent_2executor_8ts.html#autotoc_md19", [
        [ "TaskWrapper 类", "md_packages_2a2a-server_2src_2agent_2executor_8ts.html#autotoc_md20", [
          [ "构造函数", "md_packages_2a2a-server_2src_2agent_2executor_8ts.html#autotoc_md21", null ],
          [ "方法", "md_packages_2a2a-server_2src_2agent_2executor_8ts.html#autotoc_md22", null ]
        ] ],
        [ "CoderAgentExecutor 类", "md_packages_2a2a-server_2src_2agent_2executor_8ts.html#autotoc_md23", [
          [ "构造函数", "md_packages_2a2a-server_2src_2agent_2executor_8ts.html#autotoc_md24", null ],
          [ "方法", "md_packages_2a2a-server_2src_2agent_2executor_8ts.html#autotoc_md25", [
            [ "<span class=\"tt\">getConfig</span>", "md_packages_2a2a-server_2src_2agent_2executor_8ts.html#autotoc_md26", null ],
            [ "<span class=\"tt\">reconstruct</span>", "md_packages_2a2a-server_2src_2agent_2executor_8ts.html#autotoc_md27", null ],
            [ "<span class=\"tt\">createTask</span>", "md_packages_2a2a-server_2src_2agent_2executor_8ts.html#autotoc_md28", null ],
            [ "<span class=\"tt\">getTask</span>", "md_packages_2a2a-server_2src_2agent_2executor_8ts.html#autotoc_md29", null ],
            [ "<span class=\"tt\">getAllTasks</span>", "md_packages_2a2a-server_2src_2agent_2executor_8ts.html#autotoc_md30", null ],
            [ "<span class=\"tt\">cancelTask</span>", "md_packages_2a2a-server_2src_2agent_2executor_8ts.html#autotoc_md31", null ],
            [ "<span class=\"tt\">execute</span>", "md_packages_2a2a-server_2src_2agent_2executor_8ts.html#autotoc_md32", null ]
          ] ]
        ] ]
      ] ]
    ] ],
    [ "task.test.ts", "md_packages_2a2a-server_2src_2agent_2task_8test_8ts.html", [
      [ "概述", "md_packages_2a2a-server_2src_2agent_2task_8test_8ts.html#autotoc_md34", null ],
      [ "测试内容", "md_packages_2a2a-server_2src_2agent_2task_8test_8ts.html#autotoc_md35", [
        [ "scheduleToolCalls 测试", "md_packages_2a2a-server_2src_2agent_2task_8test_8ts.html#autotoc_md36", null ]
      ] ],
      [ "使用的技术", "md_packages_2a2a-server_2src_2agent_2task_8test_8ts.html#autotoc_md37", null ],
      [ "依赖模块", "md_packages_2a2a-server_2src_2agent_2task_8test_8ts.html#autotoc_md38", null ],
      [ "测试策略", "md_packages_2a2a-server_2src_2agent_2task_8test_8ts.html#autotoc_md39", null ]
    ] ],
    [ "src/agent/task.ts", "md_packages_2a2a-server_2src_2agent_2task_8ts.html", [
      [ "主要功能", "md_packages_2a2a-server_2src_2agent_2task_8ts.html#autotoc_md41", [
        [ "Task 类", "md_packages_2a2a-server_2src_2agent_2task_8ts.html#autotoc_md42", [
          [ "构造函数", "md_packages_2a2a-server_2src_2agent_2task_8ts.html#autotoc_md43", null ],
          [ "静态方法", "md_packages_2a2a-server_2src_2agent_2task_8ts.html#autotoc_md44", [
            [ "<span class=\"tt\">create</span>", "md_packages_2a2a-server_2src_2agent_2task_8ts.html#autotoc_md45", null ]
          ] ],
          [ "方法", "md_packages_2a2a-server_2src_2agent_2task_8ts.html#autotoc_md46", [
            [ "<span class=\"tt\">getMetadata</span>", "md_packages_2a2a-server_2src_2agent_2task_8ts.html#autotoc_md47", null ],
            [ "工具调用相关方法", "md_packages_2a2a-server_2src_2agent_2task_8ts.html#autotoc_md48", null ],
            [ "消息处理方法", "md_packages_2a2a-server_2src_2agent_2task_8ts.html#autotoc_md49", null ],
            [ "状态管理方法", "md_packages_2a2a-server_2src_2agent_2task_8ts.html#autotoc_md50", null ],
            [ "私有方法", "md_packages_2a2a-server_2src_2agent_2task_8ts.html#autotoc_md51", null ]
          ] ]
        ] ]
      ] ]
    ] ],
    [ "src/config/config.ts", "md_packages_2a2a-server_2src_2config_2config_8ts.html", [
      [ "主要功能", "md_packages_2a2a-server_2src_2config_2config_8ts.html#autotoc_md53", [
        [ "loadConfig 函数", "md_packages_2a2a-server_2src_2config_2config_8ts.html#autotoc_md54", null ],
        [ "mergeMcpServers 函数", "md_packages_2a2a-server_2src_2config_2config_8ts.html#autotoc_md55", null ],
        [ "setTargetDir 函数", "md_packages_2a2a-server_2src_2config_2config_8ts.html#autotoc_md56", null ],
        [ "loadEnvironment 函数", "md_packages_2a2a-server_2src_2config_2config_8ts.html#autotoc_md57", null ],
        [ "findEnvFile 函数", "md_packages_2a2a-server_2src_2config_2config_8ts.html#autotoc_md58", null ]
      ] ]
    ] ],
    [ "src/config/extension.ts", "md_packages_2a2a-server_2src_2config_2extension_8ts.html", [
      [ "主要类型和接口", "md_packages_2a2a-server_2src_2config_2extension_8ts.html#autotoc_md60", [
        [ "Extension 接口", "md_packages_2a2a-server_2src_2config_2extension_8ts.html#autotoc_md61", null ],
        [ "ExtensionConfig 接口", "md_packages_2a2a-server_2src_2config_2extension_8ts.html#autotoc_md62", null ]
      ] ],
      [ "主要功能", "md_packages_2a2a-server_2src_2config_2extension_8ts.html#autotoc_md63", [
        [ "loadExtensions 函数", "md_packages_2a2a-server_2src_2config_2extension_8ts.html#autotoc_md64", null ],
        [ "loadExtensionsFromDir 函数", "md_packages_2a2a-server_2src_2config_2extension_8ts.html#autotoc_md65", null ],
        [ "loadExtension 函数", "md_packages_2a2a-server_2src_2config_2extension_8ts.html#autotoc_md66", null ],
        [ "getContextFileNames 函数", "md_packages_2a2a-server_2src_2config_2extension_8ts.html#autotoc_md67", null ]
      ] ],
      [ "常量", "md_packages_2a2a-server_2src_2config_2extension_8ts.html#autotoc_md68", null ]
    ] ],
    [ "src/config/settings.ts", "md_packages_2a2a-server_2src_2config_2settings_8ts.html", [
      [ "主要类型和接口", "md_packages_2a2a-server_2src_2config_2settings_8ts.html#autotoc_md70", [
        [ "Settings 接口", "md_packages_2a2a-server_2src_2config_2settings_8ts.html#autotoc_md71", null ],
        [ "SettingsError 接口", "md_packages_2a2a-server_2src_2config_2settings_8ts.html#autotoc_md72", null ],
        [ "CheckpointingSettings 接口", "md_packages_2a2a-server_2src_2config_2settings_8ts.html#autotoc_md73", null ]
      ] ],
      [ "主要功能", "md_packages_2a2a-server_2src_2config_2settings_8ts.html#autotoc_md74", [
        [ "loadSettings 函数", "md_packages_2a2a-server_2src_2config_2settings_8ts.html#autotoc_md75", null ],
        [ "resolveEnvVarsInString 函数", "md_packages_2a2a-server_2src_2config_2settings_8ts.html#autotoc_md76", null ],
        [ "resolveEnvVarsInObject 函数", "md_packages_2a2a-server_2src_2config_2settings_8ts.html#autotoc_md77", null ]
      ] ],
      [ "常量", "md_packages_2a2a-server_2src_2config_2settings_8ts.html#autotoc_md78", null ]
    ] ],
    [ "app.test.ts", "md_packages_2a2a-server_2src_2http_2app_8test_8ts.html", [
      [ "概述", "md_packages_2a2a-server_2src_2http_2app_8test_8ts.html#autotoc_md80", null ],
      [ "测试内容", "md_packages_2a2a-server_2src_2http_2app_8test_8ts.html#autotoc_md81", [
        [ "E2E 测试套件", "md_packages_2a2a-server_2src_2http_2app_8test_8ts.html#autotoc_md82", null ],
        [ "端点测试套件", "md_packages_2a2a-server_2src_2http_2app_8test_8ts.html#autotoc_md83", null ]
      ] ],
      [ "使用的技术", "md_packages_2a2a-server_2src_2http_2app_8test_8ts.html#autotoc_md84", null ],
      [ "依赖模块", "md_packages_2a2a-server_2src_2http_2app_8test_8ts.html#autotoc_md85", null ],
      [ "测试策略", "md_packages_2a2a-server_2src_2http_2app_8test_8ts.html#autotoc_md86", null ]
    ] ],
    [ "src/http/app.ts", "md_packages_2a2a-server_2src_2http_2app_8ts.html", [
      [ "主要功能", "md_packages_2a2a-server_2src_2http_2app_8ts.html#autotoc_md88", [
        [ "coderAgentCard 对象", "md_packages_2a2a-server_2src_2http_2app_8ts.html#autotoc_md89", null ],
        [ "updateCoderAgentCardUrl 函数", "md_packages_2a2a-server_2src_2http_2app_8ts.html#autotoc_md90", null ],
        [ "createApp 函数", "md_packages_2a2a-server_2src_2http_2app_8ts.html#autotoc_md91", null ],
        [ "main 函数", "md_packages_2a2a-server_2src_2http_2app_8ts.html#autotoc_md92", null ]
      ] ]
    ] ],
    [ "endpoints.test.ts", "md_packages_2a2a-server_2src_2http_2endpoints_8test_8ts.html", [
      [ "概述", "md_packages_2a2a-server_2src_2http_2endpoints_8test_8ts.html#autotoc_md94", null ],
      [ "测试内容", "md_packages_2a2a-server_2src_2http_2endpoints_8test_8ts.html#autotoc_md95", [
        [ "代理服务器端点测试套件", "md_packages_2a2a-server_2src_2http_2endpoints_8test_8ts.html#autotoc_md96", null ]
      ] ],
      [ "使用的技术", "md_packages_2a2a-server_2src_2http_2endpoints_8test_8ts.html#autotoc_md97", null ],
      [ "依赖模块", "md_packages_2a2a-server_2src_2http_2endpoints_8test_8ts.html#autotoc_md98", null ],
      [ "测试策略", "md_packages_2a2a-server_2src_2http_2endpoints_8test_8ts.html#autotoc_md99", null ]
    ] ],
    [ "src/http/requestStorage.ts", "md_packages_2a2a-server_2src_2http_2request_storage_8ts.html", [
      [ "主要功能", "md_packages_2a2a-server_2src_2http_2request_storage_8ts.html#autotoc_md101", [
        [ "requestStorage 对象", "md_packages_2a2a-server_2src_2http_2request_storage_8ts.html#autotoc_md102", null ]
      ] ]
    ] ],
    [ "server.ts", "md_packages_2a2a-server_2src_2http_2server_8ts.html", [
      [ "概述", "md_packages_2a2a-server_2src_2http_2server_8ts.html#autotoc_md104", null ],
      [ "功能详情", "md_packages_2a2a-server_2src_2http_2server_8ts.html#autotoc_md105", [
        [ "异常处理", "md_packages_2a2a-server_2src_2http_2server_8ts.html#autotoc_md106", null ],
        [ "应用启动", "md_packages_2a2a-server_2src_2http_2server_8ts.html#autotoc_md107", null ],
        [ "模块识别", "md_packages_2a2a-server_2src_2http_2server_8ts.html#autotoc_md108", null ]
      ] ],
      [ "依赖模块", "md_packages_2a2a-server_2src_2http_2server_8ts.html#autotoc_md109", null ],
      [ "启动流程", "md_packages_2a2a-server_2src_2http_2server_8ts.html#autotoc_md110", null ],
      [ "设计考虑", "md_packages_2a2a-server_2src_2http_2server_8ts.html#autotoc_md111", null ]
    ] ],
    [ "src/index.ts", "md_packages_2a2a-server_2src_2index_8ts.html", [
      [ "功能", "md_packages_2a2a-server_2src_2index_8ts.html#autotoc_md113", null ],
      [ "导出内容", "md_packages_2a2a-server_2src_2index_8ts.html#autotoc_md114", null ]
    ] ],
    [ "gcs.test.ts", "md_packages_2a2a-server_2src_2persistence_2gcs_8test_8ts.html", [
      [ "概述", "md_packages_2a2a-server_2src_2persistence_2gcs_8test_8ts.html#autotoc_md116", null ],
      [ "测试内容", "md_packages_2a2a-server_2src_2persistence_2gcs_8test_8ts.html#autotoc_md117", [
        [ "GCSTaskStore 测试套件", "md_packages_2a2a-server_2src_2persistence_2gcs_8test_8ts.html#autotoc_md118", null ],
        [ "NoOpTaskStore 测试套件", "md_packages_2a2a-server_2src_2persistence_2gcs_8test_8ts.html#autotoc_md119", null ]
      ] ],
      [ "使用的技术", "md_packages_2a2a-server_2src_2persistence_2gcs_8test_8ts.html#autotoc_md120", null ],
      [ "依赖模块", "md_packages_2a2a-server_2src_2persistence_2gcs_8test_8ts.html#autotoc_md121", null ],
      [ "测试策略", "md_packages_2a2a-server_2src_2persistence_2gcs_8test_8ts.html#autotoc_md122", null ]
    ] ],
    [ "src/persistence/gcs.ts", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html", [
      [ "主要类", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md124", [
        [ "GCSTaskStore 类", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md125", [
          [ "构造函数", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md126", null ],
          [ "方法", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md127", [
            [ "<span class=\"tt\">initializeBucket</span>", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md128", null ],
            [ "<span class=\"tt\">ensureBucketInitialized</span>", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md129", null ],
            [ "<span class=\"tt\">getObjectPath</span>", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md130", null ],
            [ "<span class=\"tt\">save</span>", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md131", null ],
            [ "<span class=\"tt\">load</span>", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md132", null ]
          ] ]
        ] ],
        [ "NoOpTaskStore 类", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md133", [
          [ "构造函数", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md134", null ],
          [ "方法", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md135", [
            [ "<span class=\"tt\">save</span>", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md136", null ],
            [ "<span class=\"tt\">load</span>", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md137", null ]
          ] ]
        ] ]
      ] ],
      [ "类型定义", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md138", [
        [ "ObjectType 类型", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md139", null ]
      ] ],
      [ "辅助函数", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md140", [
        [ "getTmpArchiveFilename 函数", "md_packages_2a2a-server_2src_2persistence_2gcs_8ts.html#autotoc_md141", null ]
      ] ]
    ] ],
    [ "src/types.ts", "md_packages_2a2a-server_2src_2types_8ts.html", [
      [ "主要类型和接口", "md_packages_2a2a-server_2src_2types_8ts.html#autotoc_md143", [
        [ "CoderAgentEvent 枚举", "md_packages_2a2a-server_2src_2types_8ts.html#autotoc_md144", null ],
        [ "AgentSettings 接口", "md_packages_2a2a-server_2src_2types_8ts.html#autotoc_md145", null ],
        [ "其他事件接口", "md_packages_2a2a-server_2src_2types_8ts.html#autotoc_md146", null ],
        [ "工具相关类型", "md_packages_2a2a-server_2src_2types_8ts.html#autotoc_md147", null ],
        [ "常量和函数", "md_packages_2a2a-server_2src_2types_8ts.html#autotoc_md148", null ]
      ] ]
    ] ],
    [ "src/utils/logger.ts", "md_packages_2a2a-server_2src_2utils_2logger_8ts.html", [
      [ "主要功能", "md_packages_2a2a-server_2src_2utils_2logger_8ts.html#autotoc_md150", [
        [ "logger 对象", "md_packages_2a2a-server_2src_2utils_2logger_8ts.html#autotoc_md151", null ],
        [ "导出", "md_packages_2a2a-server_2src_2utils_2logger_8ts.html#autotoc_md152", null ]
      ] ]
    ] ],
    [ "testing_utils.ts", "md_packages_2a2a-server_2src_2utils_2testing__utils_8ts.html", [
      [ "概述", "md_packages_2a2a-server_2src_2utils_2testing__utils_8ts.html#autotoc_md154", null ],
      [ "导出的函数", "md_packages_2a2a-server_2src_2utils_2testing__utils_8ts.html#autotoc_md155", [
        [ "createMockConfig", "md_packages_2a2a-server_2src_2utils_2testing__utils_8ts.html#autotoc_md156", null ],
        [ "createStreamMessageRequest", "md_packages_2a2a-server_2src_2utils_2testing__utils_8ts.html#autotoc_md157", null ],
        [ "assertUniqueFinalEventIsLast", "md_packages_2a2a-server_2src_2utils_2testing__utils_8ts.html#autotoc_md158", null ],
        [ "assertTaskCreationAndWorkingStatus", "md_packages_2a2a-server_2src_2utils_2testing__utils_8ts.html#autotoc_md159", null ]
      ] ],
      [ "使用的技术", "md_packages_2a2a-server_2src_2utils_2testing__utils_8ts.html#autotoc_md160", null ],
      [ "依赖模块", "md_packages_2a2a-server_2src_2utils_2testing__utils_8ts.html#autotoc_md161", null ],
      [ "设计考虑", "md_packages_2a2a-server_2src_2utils_2testing__utils_8ts.html#autotoc_md162", null ]
    ] ],
    [ "vitest.config.ts", "md_packages_2a2a-server_2vitest_8config_8ts.html", [
      [ "概述", "md_packages_2a2a-server_2vitest_8config_8ts.html#autotoc_md164", null ],
      [ "配置详情", "md_packages_2a2a-server_2vitest_8config_8ts.html#autotoc_md165", [
        [ "测试报告器", "md_packages_2a2a-server_2vitest_8config_8ts.html#autotoc_md166", null ],
        [ "测试行为", "md_packages_2a2a-server_2vitest_8config_8ts.html#autotoc_md167", null ],
        [ "代码覆盖率", "md_packages_2a2a-server_2vitest_8config_8ts.html#autotoc_md168", null ]
      ] ],
      [ "使用方式", "md_packages_2a2a-server_2vitest_8config_8ts.html#autotoc_md169", null ]
    ] ],
    [ "index.ts", "md_packages_2cli_2index_8ts.html", [
      [ "功能概述", "md_packages_2cli_2index_8ts.html#autotoc_md171", null ],
      [ "主要函数", "md_packages_2cli_2index_8ts.html#autotoc_md172", [
        [ "main()", "md_packages_2cli_2index_8ts.html#autotoc_md173", null ]
      ] ],
      [ "错误处理", "md_packages_2cli_2index_8ts.html#autotoc_md174", null ]
    ] ],
    [ "extensions.tsx", "md_packages_2cli_2src_2commands_2extensions_8tsx.html", [
      [ "功能概述", "md_packages_2cli_2src_2commands_2extensions_8tsx.html#autotoc_md197", null ],
      [ "主要导出", "md_packages_2cli_2src_2commands_2extensions_8tsx.html#autotoc_md198", [
        [ "extensionsCommand: CommandModule", "md_packages_2cli_2src_2commands_2extensions_8tsx.html#autotoc_md199", null ]
      ] ],
      [ "子命令", "md_packages_2cli_2src_2commands_2extensions_8tsx.html#autotoc_md200", [
        [ "installCommand", "md_packages_2cli_2src_2commands_2extensions_8tsx.html#autotoc_md201", null ],
        [ "uninstallCommand", "md_packages_2cli_2src_2commands_2extensions_8tsx.html#autotoc_md202", null ],
        [ "listCommand", "md_packages_2cli_2src_2commands_2extensions_8tsx.html#autotoc_md203", null ],
        [ "updateCommand", "md_packages_2cli_2src_2commands_2extensions_8tsx.html#autotoc_md204", null ],
        [ "disableCommand", "md_packages_2cli_2src_2commands_2extensions_8tsx.html#autotoc_md205", null ],
        [ "enableCommand", "md_packages_2cli_2src_2commands_2extensions_8tsx.html#autotoc_md206", null ],
        [ "linkCommand", "md_packages_2cli_2src_2commands_2extensions_8tsx.html#autotoc_md207", null ],
        [ "newCommand", "md_packages_2cli_2src_2commands_2extensions_8tsx.html#autotoc_md208", null ]
      ] ],
      [ "使用示例", "md_packages_2cli_2src_2commands_2extensions_8tsx.html#autotoc_md209", null ]
    ] ],
    [ "Ink Library Screen Reader Guidance", "md_packages_2cli_2src_2commands_2extensions_2examples_2context_2_g_e_m_i_n_i.html", [
      [ "General Principles", "md_packages_2cli_2src_2commands_2extensions_2examples_2context_2_g_e_m_i_n_i.html#autotoc_md211", null ]
    ] ],
    [ "install.ts", "md_packages_2cli_2src_2commands_2extensions_2install_8ts.html", [
      [ "功能概述", "md_packages_2cli_2src_2commands_2extensions_2install_8ts.html#autotoc_md213", null ],
      [ "主要函数", "md_packages_2cli_2src_2commands_2extensions_2install_8ts.html#autotoc_md214", [
        [ "handleInstall(args: InstallArgs)", "md_packages_2cli_2src_2commands_2extensions_2install_8ts.html#autotoc_md215", null ],
        [ "installCommand: CommandModule", "md_packages_2cli_2src_2commands_2extensions_2install_8ts.html#autotoc_md216", null ]
      ] ],
      [ "支持的安装源", "md_packages_2cli_2src_2commands_2extensions_2install_8ts.html#autotoc_md217", [
        [ "Git 仓库", "md_packages_2cli_2src_2commands_2extensions_2install_8ts.html#autotoc_md218", null ],
        [ "本地路径", "md_packages_2cli_2src_2commands_2extensions_2install_8ts.html#autotoc_md219", null ]
      ] ],
      [ "安装流程", "md_packages_2cli_2src_2commands_2extensions_2install_8ts.html#autotoc_md220", null ],
      [ "使用示例", "md_packages_2cli_2src_2commands_2extensions_2install_8ts.html#autotoc_md221", null ],
      [ "错误处理", "md_packages_2cli_2src_2commands_2extensions_2install_8ts.html#autotoc_md222", null ]
    ] ],
    [ "list.ts", "md_packages_2cli_2src_2commands_2extensions_2list_8ts.html", [
      [ "功能概述", "md_packages_2cli_2src_2commands_2extensions_2list_8ts.html#autotoc_md224", null ],
      [ "主要函数", "md_packages_2cli_2src_2commands_2extensions_2list_8ts.html#autotoc_md225", [
        [ "handleList()", "md_packages_2cli_2src_2commands_2extensions_2list_8ts.html#autotoc_md226", null ],
        [ "listCommand: CommandModule", "md_packages_2cli_2src_2commands_2extensions_2list_8ts.html#autotoc_md227", null ]
      ] ],
      [ "扩展信息显示", "md_packages_2cli_2src_2commands_2extensions_2list_8ts.html#autotoc_md228", [
        [ "toOutputString(extension: Extension): string", "md_packages_2cli_2src_2commands_2extensions_2list_8ts.html#autotoc_md229", null ]
      ] ],
      [ "使用示例", "md_packages_2cli_2src_2commands_2extensions_2list_8ts.html#autotoc_md230", null ],
      [ "错误处理", "md_packages_2cli_2src_2commands_2extensions_2list_8ts.html#autotoc_md231", null ]
    ] ],
    [ "add.ts", "md_packages_2cli_2src_2commands_2mcp_2add_8ts.html", [
      [ "功能概述", "md_packages_2cli_2src_2commands_2mcp_2add_8ts.html#autotoc_md233", null ],
      [ "主要函数", "md_packages_2cli_2src_2commands_2mcp_2add_8ts.html#autotoc_md234", [
        [ "addMcpServer()", "md_packages_2cli_2src_2commands_2mcp_2add_8ts.html#autotoc_md235", null ],
        [ "addCommand: CommandModule", "md_packages_2cli_2src_2commands_2mcp_2add_8ts.html#autotoc_md236", null ]
      ] ],
      [ "传输类型支持", "md_packages_2cli_2src_2commands_2mcp_2add_8ts.html#autotoc_md237", [
        [ "stdio（默认）", "md_packages_2cli_2src_2commands_2mcp_2add_8ts.html#autotoc_md238", null ],
        [ "sse", "md_packages_2cli_2src_2commands_2mcp_2add_8ts.html#autotoc_md239", null ],
        [ "http", "md_packages_2cli_2src_2commands_2mcp_2add_8ts.html#autotoc_md240", null ]
      ] ],
      [ "使用示例", "md_packages_2cli_2src_2commands_2mcp_2add_8ts.html#autotoc_md241", null ]
    ] ],
    [ "list.ts", "md_packages_2cli_2src_2commands_2mcp_2list_8ts.html", [
      [ "功能概述", "md_packages_2cli_2src_2commands_2mcp_2list_8ts.html#autotoc_md243", null ],
      [ "主要函数", "md_packages_2cli_2src_2commands_2mcp_2list_8ts.html#autotoc_md244", [
        [ "getMcpServersFromConfig()", "md_packages_2cli_2src_2commands_2mcp_2list_8ts.html#autotoc_md245", null ],
        [ "testMCPConnection(serverName: string, config: MCPServerConfig): Promise&lt;MCPServerStatus&gt;", "md_packages_2cli_2src_2commands_2mcp_2list_8ts.html#autotoc_md246", null ],
        [ "getServerStatus(serverName: string, server: MCPServerConfig): Promise&lt;MCPServerStatus&gt;", "md_packages_2cli_2src_2commands_2mcp_2list_8ts.html#autotoc_md247", null ],
        [ "listMcpServers(): Promise&lt;void&gt;", "md_packages_2cli_2src_2commands_2mcp_2list_8ts.html#autotoc_md248", null ],
        [ "listCommand: CommandModule", "md_packages_2cli_2src_2commands_2mcp_2list_8ts.html#autotoc_md249", null ]
      ] ],
      [ "状态指示", "md_packages_2cli_2src_2commands_2mcp_2list_8ts.html#autotoc_md250", [
        [ "颜色编码", "md_packages_2cli_2src_2commands_2mcp_2list_8ts.html#autotoc_md251", null ],
        [ "服务器信息显示", "md_packages_2cli_2src_2commands_2mcp_2list_8ts.html#autotoc_md252", null ]
      ] ],
      [ "使用示例", "md_packages_2cli_2src_2commands_2mcp_2list_8ts.html#autotoc_md253", null ]
    ] ],
    [ "mcp.ts", "md_packages_2cli_2src_2commands_2mcp_2mcp_8ts.html", [
      [ "功能概述", "md_packages_2cli_2src_2commands_2mcp_2mcp_8ts.html#autotoc_md255", null ],
      [ "主要导出", "md_packages_2cli_2src_2commands_2mcp_2mcp_8ts.html#autotoc_md256", [
        [ "mcpCommand: CommandModule", "md_packages_2cli_2src_2commands_2mcp_2mcp_8ts.html#autotoc_md257", null ]
      ] ],
      [ "子命令", "md_packages_2cli_2src_2commands_2mcp_2mcp_8ts.html#autotoc_md258", [
        [ "addCommand", "md_packages_2cli_2src_2commands_2mcp_2mcp_8ts.html#autotoc_md259", null ],
        [ "removeCommand", "md_packages_2cli_2src_2commands_2mcp_2mcp_8ts.html#autotoc_md260", null ],
        [ "listCommand", "md_packages_2cli_2src_2commands_2mcp_2mcp_8ts.html#autotoc_md261", null ]
      ] ],
      [ "使用示例", "md_packages_2cli_2src_2commands_2mcp_2mcp_8ts.html#autotoc_md262", null ]
    ] ],
    [ "remove.ts", "md_packages_2cli_2src_2commands_2mcp_2remove_8ts.html", [
      [ "功能概述", "md_packages_2cli_2src_2commands_2mcp_2remove_8ts.html#autotoc_md264", null ],
      [ "主要函数", "md_packages_2cli_2src_2commands_2mcp_2remove_8ts.html#autotoc_md265", [
        [ "removeMcpServer(name: string, options: { scope: string })", "md_packages_2cli_2src_2commands_2mcp_2remove_8ts.html#autotoc_md266", null ],
        [ "removeCommand: CommandModule", "md_packages_2cli_2src_2commands_2mcp_2remove_8ts.html#autotoc_md267", null ]
      ] ],
      [ "使用示例", "md_packages_2cli_2src_2commands_2mcp_2remove_8ts.html#autotoc_md268", null ],
      [ "错误处理", "md_packages_2cli_2src_2commands_2mcp_2remove_8ts.html#autotoc_md269", null ]
    ] ],
    [ "auth.ts", "md_packages_2cli_2src_2config_2auth_8ts.html", [
      [ "概述", "md_packages_2cli_2src_2config_2auth_8ts.html#autotoc_md271", null ],
      [ "导出的函数", "md_packages_2cli_2src_2config_2auth_8ts.html#autotoc_md272", [
        [ "validateAuthMethod", "md_packages_2cli_2src_2config_2auth_8ts.html#autotoc_md273", null ]
      ] ],
      [ "依赖模块", "md_packages_2cli_2src_2config_2auth_8ts.html#autotoc_md274", null ],
      [ "使用场景", "md_packages_2cli_2src_2config_2auth_8ts.html#autotoc_md275", null ],
      [ "设计考虑", "md_packages_2cli_2src_2config_2auth_8ts.html#autotoc_md276", null ]
    ] ],
    [ "config.ts", "md_packages_2cli_2src_2config_2config_8ts.html", [
      [ "功能概述", "md_packages_2cli_2src_2config_2config_8ts.html#autotoc_md278", null ],
      [ "主要接口", "md_packages_2cli_2src_2config_2config_8ts.html#autotoc_md279", [
        [ "CliArgs", "md_packages_2cli_2src_2config_2config_8ts.html#autotoc_md280", null ]
      ] ],
      [ "主要函数", "md_packages_2cli_2src_2config_2config_8ts.html#autotoc_md281", [
        [ "parseArguments(settings: Settings): Promise&lt;CliArgs&gt;", "md_packages_2cli_2src_2config_2config_8ts.html#autotoc_md282", null ],
        [ "loadHierarchicalGeminiMemory()", "md_packages_2cli_2src_2config_2config_8ts.html#autotoc_md283", null ],
        [ "loadCliConfig(settings, extensions, sessionId, argv, cwd)", "md_packages_2cli_2src_2config_2config_8ts.html#autotoc_md284", null ]
      ] ],
      [ "辅助函数", "md_packages_2cli_2src_2config_2config_8ts.html#autotoc_md285", [
        [ "allowedMcpServers()", "md_packages_2cli_2src_2config_2config_8ts.html#autotoc_md286", null ],
        [ "mergeMcpServers()", "md_packages_2cli_2src_2config_2config_8ts.html#autotoc_md287", null ],
        [ "mergeExcludeTools()", "md_packages_2cli_2src_2config_2config_8ts.html#autotoc_md288", null ]
      ] ],
      [ "常量", "md_packages_2cli_2src_2config_2config_8ts.html#autotoc_md289", null ]
    ] ],
    [ "extension.ts", "md_packages_2cli_2src_2config_2extension_8ts.html", [
      [ "功能概述", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md291", null ],
      [ "主要接口", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md292", [
        [ "Extension", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md293", null ],
        [ "ExtensionConfig", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md294", null ],
        [ "ExtensionInstallMetadata", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md295", null ]
      ] ],
      [ "主要类", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md296", [
        [ "ExtensionStorage", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md297", null ]
      ] ],
      [ "主要函数", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md298", [
        [ "loadExtensions(workspaceDir: string = process.cwd()): Extension[]", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md299", null ],
        [ "loadUserExtensions(): Extension[]", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md300", null ],
        [ "loadExtensionsFromDir(dir: string): Extension[]", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md301", null ],
        [ "loadExtension(extensionDir: string): Extension | null", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md302", null ],
        [ "installExtension(installMetadata: ExtensionInstallMetadata, cwd: string = process.cwd()): Promise&lt;string&gt;", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md303", null ],
        [ "uninstallExtension(extensionName: string, cwd: string = process.cwd()): Promise&lt;void&gt;", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md304", null ],
        [ "updateExtension(extension: Extension, cwd: string = process.cwd()): Promise&lt;ExtensionUpdateInfo&gt;", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md305", null ],
        [ "disableExtension(name: string, scope: SettingScope, cwd: string = process.cwd())", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md306", null ],
        [ "enableExtension(name: string, scopes: SettingScope[])", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md307", null ]
      ] ],
      [ "辅助函数", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md308", [
        [ "annotateActiveExtensions(extensions, enabledExtensionNames, workspaceDir): GeminiCLIExtension[]", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md309", null ],
        [ "toOutputString(extension: Extension): string", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md310", null ],
        [ "performWorkspaceExtensionMigration(extensions: Extension[]): Promise&lt;string[]&gt;", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md311", null ]
      ] ],
      [ "常量", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md312", [
        [ "EXTENSIONS_DIRECTORY_NAME", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md313", null ],
        [ "EXTENSIONS_CONFIG_FILENAME", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md314", null ],
        [ "INSTALL_METADATA_FILENAME", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md315", null ]
      ] ],
      [ "使用场景", "md_packages_2cli_2src_2config_2extension_8ts.html#autotoc_md316", null ]
    ] ],
    [ "keyBindings.ts", "md_packages_2cli_2src_2config_2key_bindings_8ts.html", [
      [ "概述", "md_packages_2cli_2src_2config_2key_bindings_8ts.html#autotoc_md318", null ],
      [ "导出的枚举", "md_packages_2cli_2src_2config_2key_bindings_8ts.html#autotoc_md319", [
        [ "Command", "md_packages_2cli_2src_2config_2key_bindings_8ts.html#autotoc_md320", null ]
      ] ],
      [ "导出的接口", "md_packages_2cli_2src_2config_2key_bindings_8ts.html#autotoc_md321", [
        [ "KeyBinding", "md_packages_2cli_2src_2config_2key_bindings_8ts.html#autotoc_md322", null ]
      ] ],
      [ "导出的类型", "md_packages_2cli_2src_2config_2key_bindings_8ts.html#autotoc_md323", [
        [ "KeyBindingConfig", "md_packages_2cli_2src_2config_2key_bindings_8ts.html#autotoc_md324", null ]
      ] ],
      [ "导出的常量", "md_packages_2cli_2src_2config_2key_bindings_8ts.html#autotoc_md325", [
        [ "defaultKeyBindings", "md_packages_2cli_2src_2config_2key_bindings_8ts.html#autotoc_md326", null ]
      ] ],
      [ "使用场景", "md_packages_2cli_2src_2config_2key_bindings_8ts.html#autotoc_md327", null ],
      [ "设计考虑", "md_packages_2cli_2src_2config_2key_bindings_8ts.html#autotoc_md328", null ]
    ] ],
    [ "sandboxConfig.ts", "md_packages_2cli_2src_2config_2sandbox_config_8ts.html", [
      [ "概述", "md_packages_2cli_2src_2config_2sandbox_config_8ts.html#autotoc_md330", null ],
      [ "导出的函数", "md_packages_2cli_2src_2config_2sandbox_config_8ts.html#autotoc_md331", [
        [ "loadSandboxConfig", "md_packages_2cli_2src_2config_2sandbox_config_8ts.html#autotoc_md332", null ],
        [ "getSandboxCommand (内部函数)", "md_packages_2cli_2src_2config_2sandbox_config_8ts.html#autotoc_md333", null ]
      ] ],
      [ "类型定义", "md_packages_2cli_2src_2config_2sandbox_config_8ts.html#autotoc_md334", [
        [ "SandboxCliArgs", "md_packages_2cli_2src_2config_2sandbox_config_8ts.html#autotoc_md335", null ]
      ] ],
      [ "常量", "md_packages_2cli_2src_2config_2sandbox_config_8ts.html#autotoc_md336", [
        [ "VALID_SANDBOX_COMMANDS", "md_packages_2cli_2src_2config_2sandbox_config_8ts.html#autotoc_md337", null ]
      ] ],
      [ "依赖模块", "md_packages_2cli_2src_2config_2sandbox_config_8ts.html#autotoc_md338", null ],
      [ "使用场景", "md_packages_2cli_2src_2config_2sandbox_config_8ts.html#autotoc_md339", null ],
      [ "设计考虑", "md_packages_2cli_2src_2config_2sandbox_config_8ts.html#autotoc_md340", null ]
    ] ],
    [ "settings.ts", "md_packages_2cli_2src_2config_2settings_8ts.html", [
      [ "功能概述", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md342", null ],
      [ "主要接口和类型", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md343", [
        [ "Settings", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md344", null ],
        [ "LoadedSettings", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md345", null ],
        [ "SettingScope", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md346", null ]
      ] ],
      [ "主要函数", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md347", [
        [ "loadSettings(workspaceDir: string = process.cwd()): LoadedSettings", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md348", null ],
        [ "saveSettings(settingsFile: SettingsFile): void", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md349", null ],
        [ "needsMigration(settings: Record&lt;string, unknown&gt;): boolean", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md350", null ],
        [ "migrateSettingsToV2(flatSettings: Record&lt;string, unknown&gt;): Record&lt;string, unknown&gt; | null", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md351", null ],
        [ "migrateSettingsToV1(v2Settings: Record&lt;string, unknown&gt;): Record&lt;string, unknown&gt;", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md352", null ]
      ] ],
      [ "辅助函数", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md353", [
        [ "mergeSettings()", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md354", null ],
        [ "loadEnvironment(settings: Settings): void", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md355", null ],
        [ "findEnvFile(startDir: string): string | null", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md356", null ],
        [ "setUpCloudShellEnvironment(envFilePath: string | null): void", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md357", null ]
      ] ],
      [ "常量", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md358", [
        [ "MIGRATION_MAP", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md359", null ],
        [ "KNOWN_V2_CONTAINERS", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md360", null ],
        [ "DEFAULT_EXCLUDED_ENV_VARS", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md361", null ]
      ] ],
      [ "文件路径", "md_packages_2cli_2src_2config_2settings_8ts.html#autotoc_md362", null ]
    ] ],
    [ "auth.ts", "md_packages_2cli_2src_2core_2auth_8ts.html", [
      [ "功能概述", "md_packages_2cli_2src_2core_2auth_8ts.html#autotoc_md364", null ],
      [ "主要函数", "md_packages_2cli_2src_2core_2auth_8ts.html#autotoc_md365", [
        [ "performInitialAuth(config: Config, authType: AuthType | undefined): Promise&lt;string | null&gt;", "md_packages_2cli_2src_2core_2auth_8ts.html#autotoc_md366", null ]
      ] ],
      [ "认证流程", "md_packages_2cli_2src_2core_2auth_8ts.html#autotoc_md367", null ],
      [ "错误处理", "md_packages_2cli_2src_2core_2auth_8ts.html#autotoc_md368", null ],
      [ "依赖关系", "md_packages_2cli_2src_2core_2auth_8ts.html#autotoc_md369", null ],
      [ "使用场景", "md_packages_2cli_2src_2core_2auth_8ts.html#autotoc_md370", null ]
    ] ],
    [ "initializer.ts", "md_packages_2cli_2src_2core_2initializer_8ts.html", [
      [ "功能概述", "md_packages_2cli_2src_2core_2initializer_8ts.html#autotoc_md372", null ],
      [ "主要接口", "md_packages_2cli_2src_2core_2initializer_8ts.html#autotoc_md373", [
        [ "InitializationResult", "md_packages_2cli_2src_2core_2initializer_8ts.html#autotoc_md374", null ]
      ] ],
      [ "主要函数", "md_packages_2cli_2src_2core_2initializer_8ts.html#autotoc_md375", [
        [ "initializeApp(config: Config, settings: LoadedSettings): Promise&lt;InitializationResult&gt;", "md_packages_2cli_2src_2core_2initializer_8ts.html#autotoc_md376", null ]
      ] ],
      [ "初始化流程", "md_packages_2cli_2src_2core_2initializer_8ts.html#autotoc_md377", null ],
      [ "依赖关系", "md_packages_2cli_2src_2core_2initializer_8ts.html#autotoc_md378", null ],
      [ "使用场景", "md_packages_2cli_2src_2core_2initializer_8ts.html#autotoc_md379", null ]
    ] ],
    [ "gemini.tsx", "md_packages_2cli_2src_2gemini_8tsx.html", [
      [ "功能概述", "md_packages_2cli_2src_2gemini_8tsx.html#autotoc_md381", null ],
      [ "主要函数", "md_packages_2cli_2src_2gemini_8tsx.html#autotoc_md382", [
        [ "validateDnsResolutionOrder(order: string | undefined): DnsResolutionOrder", "md_packages_2cli_2src_2gemini_8tsx.html#autotoc_md383", null ],
        [ "getNodeMemoryArgs(config: Config): string[]", "md_packages_2cli_2src_2gemini_8tsx.html#autotoc_md384", null ],
        [ "relaunchWithAdditionalArgs(additionalArgs: string[])", "md_packages_2cli_2src_2gemini_8tsx.html#autotoc_md385", null ],
        [ "setupUnhandledRejectionHandler()", "md_packages_2cli_2src_2gemini_8tsx.html#autotoc_md386", null ],
        [ "startInteractiveUI(config, settings, startupWarnings, workspaceRoot, initializationResult)", "md_packages_2cli_2src_2gemini_8tsx.html#autotoc_md387", null ],
        [ "main()", "md_packages_2cli_2src_2gemini_8tsx.html#autotoc_md388", null ]
      ] ],
      [ "组件", "md_packages_2cli_2src_2gemini_8tsx.html#autotoc_md389", [
        [ "InitializingComponent", "md_packages_2cli_2src_2gemini_8tsx.html#autotoc_md390", null ]
      ] ],
      [ "常量和配置", "md_packages_2cli_2src_2gemini_8tsx.html#autotoc_md391", null ]
    ] ],
    [ "nonInteractiveCli.ts", "md_packages_2cli_2src_2non_interactive_cli_8ts.html", [
      [ "功能概述", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md393", null ],
      [ "主要函数", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md394", [
        [ "runNonInteractive(config: Config, input: string, prompt_id: string): Promise&lt;void&gt;", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md395", null ]
      ] ],
      [ "执行流程", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md396", [
        [ "1. 初始化", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md397", null ],
        [ "2. 输入处理", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md398", null ],
        [ "3. 消息循环", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md399", null ],
        [ "4. 消息发送", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md400", null ],
        [ "5. 工具执行", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md401", null ],
        [ "6. 输出处理", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md402", null ]
      ] ],
      [ "错误处理", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md403", [
        [ "FatalInputError", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md404", null ],
        [ "FatalTurnLimitedError", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md405", null ],
        [ "一般错误处理", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md406", null ]
      ] ],
      [ "工具调用处理", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md407", [
        [ "工具调用执行", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md408", null ],
        [ "工具响应处理", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md409", null ]
      ] ],
      [ "清理和资源管理", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md410", [
        [ "ConsolePatcher", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md411", null ],
        [ "遥测关闭", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md412", null ],
        [ "AbortController", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md413", null ]
      ] ],
      [ "特殊处理", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md414", [
        [ "EPIPE 错误", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md415", null ],
        [ "流式响应", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md416", null ]
      ] ],
      [ "使用场景", "md_packages_2cli_2src_2non_interactive_cli_8ts.html#autotoc_md417", null ]
    ] ],
    [ "AppContainer.tsx", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html", [
      [ "功能概述", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md419", null ],
      [ "主要功能模块", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md420", [
        [ "状态管理", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md421", null ],
        [ "UI 上下文", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md422", null ],
        [ "命令处理", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md423", null ],
        [ "键盘事件处理", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md424", null ]
      ] ],
      [ "主要 Hook", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md425", [
        [ "状态 Hooks", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md426", null ],
        [ "工具 Hooks", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md427", null ],
        [ "特殊功能 Hooks", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md428", null ]
      ] ],
      [ "主要状态变量", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md429", [
        [ "应用状态", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md430", null ],
        [ "认证相关", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md431", null ],
        [ "UI 状态", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md432", null ]
      ] ],
      [ "主要功能", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md433", [
        [ "初始化处理", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md434", null ],
        [ "输入处理", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md435", null ],
        [ "命令处理", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md436", null ],
        [ "键盘快捷键", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md437", null ]
      ] ],
      [ "组件结构", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md438", [
        [ "上下文提供者", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md439", null ],
        [ "子组件", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md440", null ]
      ] ],
      [ "生命周期", "md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md441", null ]
    ] ],
    [ "colors.ts", "md_packages_2cli_2src_2ui_2colors_8ts.html", [
      [ "概述", "md_packages_2cli_2src_2ui_2colors_8ts.html#autotoc_md443", null ],
      [ "导出的对象", "md_packages_2cli_2src_2ui_2colors_8ts.html#autotoc_md444", [
        [ "Colors", "md_packages_2cli_2src_2ui_2colors_8ts.html#autotoc_md445", null ]
      ] ],
      [ "依赖模块", "md_packages_2cli_2src_2ui_2colors_8ts.html#autotoc_md446", null ],
      [ "使用场景", "md_packages_2cli_2src_2ui_2colors_8ts.html#autotoc_md447", null ],
      [ "设计考虑", "md_packages_2cli_2src_2ui_2colors_8ts.html#autotoc_md448", null ]
    ] ],
    [ "constants.ts", "md_packages_2cli_2src_2ui_2constants_8ts.html", [
      [ "概述", "md_packages_2cli_2src_2ui_2constants_8ts.html#autotoc_md450", null ],
      [ "导出的常量", "md_packages_2cli_2src_2ui_2constants_8ts.html#autotoc_md451", [
        [ "UI 尺寸常量", "md_packages_2cli_2src_2ui_2constants_8ts.html#autotoc_md452", null ],
        [ "流处理常量", "md_packages_2cli_2src_2ui_2constants_8ts.html#autotoc_md453", null ],
        [ "工具常量", "md_packages_2cli_2src_2ui_2constants_8ts.html#autotoc_md454", null ],
        [ "工具状态符号", "md_packages_2cli_2src_2ui_2constants_8ts.html#autotoc_md455", null ]
      ] ],
      [ "使用场景", "md_packages_2cli_2src_2ui_2constants_8ts.html#autotoc_md456", null ],
      [ "设计考虑", "md_packages_2cli_2src_2ui_2constants_8ts.html#autotoc_md457", null ]
    ] ],
    [ "readStdin.ts", "md_packages_2cli_2src_2utils_2read_stdin_8ts.html", [
      [ "功能概述", "md_packages_2cli_2src_2utils_2read_stdin_8ts.html#autotoc_md459", null ],
      [ "主要函数", "md_packages_2cli_2src_2utils_2read_stdin_8ts.html#autotoc_md460", [
        [ "readStdin(): Promise&lt;string&gt;", "md_packages_2cli_2src_2utils_2read_stdin_8ts.html#autotoc_md461", null ]
      ] ],
      [ "实现细节", "md_packages_2cli_2src_2utils_2read_stdin_8ts.html#autotoc_md462", [
        [ "数据大小限制", "md_packages_2cli_2src_2utils_2read_stdin_8ts.html#autotoc_md463", null ],
        [ "超时处理", "md_packages_2cli_2src_2utils_2read_stdin_8ts.html#autotoc_md464", null ],
        [ "事件处理", "md_packages_2cli_2src_2utils_2read_stdin_8ts.html#autotoc_md465", null ],
        [ "数据累积", "md_packages_2cli_2src_2utils_2read_stdin_8ts.html#autotoc_md466", null ]
      ] ],
      [ "错误处理", "md_packages_2cli_2src_2utils_2read_stdin_8ts.html#autotoc_md467", null ],
      [ "使用场景", "md_packages_2cli_2src_2utils_2read_stdin_8ts.html#autotoc_md468", null ],
      [ "注意事项", "md_packages_2cli_2src_2utils_2read_stdin_8ts.html#autotoc_md469", null ]
    ] ],
    [ "test-setup.ts", "md_packages_2cli_2test-setup_8ts.html", [
      [ "概述", "md_packages_2cli_2test-setup_8ts.html#autotoc_md471", null ],
      [ "功能详情", "md_packages_2cli_2test-setup_8ts.html#autotoc_md472", [
        [ "环境变量配置", "md_packages_2cli_2test-setup_8ts.html#autotoc_md473", null ],
        [ "自定义匹配器导入", "md_packages_2cli_2test-setup_8ts.html#autotoc_md474", null ]
      ] ],
      [ "设计考虑", "md_packages_2cli_2test-setup_8ts.html#autotoc_md475", null ],
      [ "使用方式", "md_packages_2cli_2test-setup_8ts.html#autotoc_md476", null ]
    ] ],
    [ "vitest.config.ts", "md_packages_2cli_2vitest_8config_8ts.html", [
      [ "概述", "md_packages_2cli_2vitest_8config_8ts.html#autotoc_md478", null ],
      [ "配置详情", "md_packages_2cli_2vitest_8config_8ts.html#autotoc_md479", [
        [ "测试文件匹配", "md_packages_2cli_2vitest_8config_8ts.html#autotoc_md480", null ],
        [ "测试环境", "md_packages_2cli_2vitest_8config_8ts.html#autotoc_md481", null ],
        [ "测试报告器", "md_packages_2cli_2vitest_8config_8ts.html#autotoc_md482", null ],
        [ "代码覆盖率", "md_packages_2cli_2vitest_8config_8ts.html#autotoc_md483", null ]
      ] ],
      [ "使用方式", "md_packages_2cli_2vitest_8config_8ts.html#autotoc_md484", null ]
    ] ],
    [ "代码辅助功能 (codeAssist)", "md_packages_2core_2src_2code__assist_2code_assist.html", [
      [ "核心组件", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md486", [
        [ "createCodeAssistContentGenerator()", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md487", null ],
        [ "getCodeAssistServer()", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md488", null ]
      ] ],
      [ "服务器实现", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md489", [
        [ "CodeAssistServer 类", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md490", null ],
        [ "HTTP 配置", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md491", null ],
        [ "端点配置", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md492", null ]
      ] ],
      [ "认证集成", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md493", [
        [ "OAuth2Client 集成", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md494", null ],
        [ "用户设置", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md495", null ]
      ] ],
      [ "API 方法", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md496", [
        [ "内容生成", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md497", null ],
        [ "用户管理", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md498", null ],
        [ "设置管理", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md499", null ],
        [ "Token 计数", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md500", null ]
      ] ],
      [ "请求处理", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md501", [
        [ "HTTP 请求", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md502", null ],
        [ "流式响应处理", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md503", null ],
        [ "错误处理", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md504", null ]
      ] ],
      [ "数据转换", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md505", [
        [ "请求转换", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md506", null ],
        [ "响应转换", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md507", null ]
      ] ],
      [ "环境集成", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md508", [
        [ "会话管理", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md509", null ],
        [ "配置覆盖", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md510", null ]
      ] ],
      [ "安全特性", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md511", [
        [ "认证安全", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md512", null ],
        [ "数据安全", "md_packages_2core_2src_2code__assist_2code_assist.html#autotoc_md513", null ]
      ] ]
    ] ],
    [ "Config 类", "md_packages_2core_2src_2config_2config.html", [
      [ "主要功能", "md_packages_2core_2src_2config_2config.html#autotoc_md515", null ],
      [ "核心属性", "md_packages_2core_2src_2config_2config.html#autotoc_md516", [
        [ "基本配置", "md_packages_2core_2src_2config_2config.html#autotoc_md517", null ],
        [ "工具配置", "md_packages_2core_2src_2config_2config.html#autotoc_md518", null ],
        [ "文件过滤配置", "md_packages_2core_2src_2config_2config.html#autotoc_md519", null ],
        [ "其他配置", "md_packages_2core_2src_2config_2config.html#autotoc_md520", null ]
      ] ],
      [ "核心方法", "md_packages_2core_2src_2config_2config.html#autotoc_md521", [
        [ "初始化", "md_packages_2core_2src_2config_2config.html#autotoc_md522", null ],
        [ "访问器方法", "md_packages_2core_2src_2config_2config.html#autotoc_md523", null ],
        [ "设置方法", "md_packages_2core_2src_2config_2config.html#autotoc_md524", null ]
      ] ],
      [ "嵌套类型", "md_packages_2core_2src_2config_2config.html#autotoc_md525", [
        [ "ApprovalMode 枚举", "md_packages_2core_2src_2config_2config.html#autotoc_md526", null ],
        [ "TelemetrySettings 接口", "md_packages_2core_2src_2config_2config.html#autotoc_md527", null ],
        [ "MCPServerConfig 类", "md_packages_2core_2src_2config_2config.html#autotoc_md528", null ]
      ] ],
      [ "认证相关", "md_packages_2core_2src_2config_2config.html#autotoc_md529", [
        [ "AuthProviderType 枚举", "md_packages_2core_2src_2config_2config.html#autotoc_md530", null ],
        [ "FlashFallbackHandler 类型", "md_packages_2core_2src_2config_2config.html#autotoc_md531", null ]
      ] ],
      [ "文件过滤选项", "md_packages_2core_2src_2config_2config.html#autotoc_md532", [
        [ "FileFilteringOptions 接口", "md_packages_2core_2src_2config_2config.html#autotoc_md533", null ]
      ] ]
    ] ],
    [ "Core Configuration", "md_packages_2core_2src_2config_2config_8ts.html", [
      [ "Enumerations", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md535", [
        [ "ApprovalMode", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md536", null ],
        [ "AuthProviderType", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md537", null ]
      ] ],
      [ "Interfaces", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md538", [
        [ "AccessibilitySettings", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md539", null ],
        [ "BugCommandSettings", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md540", null ],
        [ "ChatCompressionSettings", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md541", null ],
        [ "SummarizeToolOutputSettings", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md542", null ],
        [ "TelemetrySettings", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md543", null ],
        [ "SandboxConfig", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md544", null ],
        [ "FileFilteringOptions", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md545", null ]
      ] ],
      [ "Classes", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md546", [
        [ "MCPServerConfig", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md547", null ],
        [ "Config", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md548", null ]
      ] ],
      [ "Constants", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md549", [
        [ "File Filtering Defaults", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md550", null ],
        [ "Truncation Defaults", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md551", null ]
      ] ],
      [ "Type Definitions", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md552", [
        [ "FlashFallbackHandler", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md553", null ],
        [ "GeminiCLIExtension", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md554", null ]
      ] ],
      [ "Re-exports", "md_packages_2core_2src_2config_2config_8ts.html#autotoc_md555", null ]
    ] ],
    [ "Model Configuration Constants", "md_packages_2core_2src_2config_2models_8ts.html", [
      [ "Default Models", "md_packages_2core_2src_2config_2models_8ts.html#autotoc_md557", [
        [ "DEFAULT_GEMINI_MODEL", "md_packages_2core_2src_2config_2models_8ts.html#autotoc_md558", null ],
        [ "DEFAULT_GEMINI_FLASH_MODEL", "md_packages_2core_2src_2config_2models_8ts.html#autotoc_md559", null ],
        [ "DEFAULT_GEMINI_FLASH_LITE_MODEL", "md_packages_2core_2src_2config_2models_8ts.html#autotoc_md560", null ],
        [ "DEFAULT_GEMINI_EMBEDDING_MODEL", "md_packages_2core_2src_2config_2models_8ts.html#autotoc_md561", null ]
      ] ],
      [ "Thinking Mode", "md_packages_2core_2src_2config_2models_8ts.html#autotoc_md562", [
        [ "DEFAULT_THINKING_MODE", "md_packages_2core_2src_2config_2models_8ts.html#autotoc_md563", null ]
      ] ]
    ] ],
    [ "Storage Management", "md_packages_2core_2src_2config_2storage_8ts.html", [
      [ "Constants", "md_packages_2core_2src_2config_2storage_8ts.html#autotoc_md565", [
        [ "Directory and File Names", "md_packages_2core_2src_2config_2storage_8ts.html#autotoc_md566", null ]
      ] ],
      [ "Storage Class", "md_packages_2core_2src_2config_2storage_8ts.html#autotoc_md567", [
        [ "Static Methods", "md_packages_2core_2src_2config_2storage_8ts.html#autotoc_md568", [
          [ "Global Directory Paths", "md_packages_2core_2src_2config_2storage_8ts.html#autotoc_md569", null ]
        ] ],
        [ "Instance Methods", "md_packages_2core_2src_2config_2storage_8ts.html#autotoc_md570", [
          [ "Project-Specific Paths", "md_packages_2core_2src_2config_2storage_8ts.html#autotoc_md571", null ]
        ] ],
        [ "Private Methods", "md_packages_2core_2src_2config_2storage_8ts.html#autotoc_md572", null ]
      ] ]
    ] ],
    [ "GeminiClient 类", "md_packages_2core_2src_2core_2client.html", [
      [ "主要功能", "md_packages_2core_2src_2core_2client.html#autotoc_md574", null ],
      [ "核心方法", "md_packages_2core_2src_2core_2client.html#autotoc_md575", [
        [ "初始化和配置", "md_packages_2core_2src_2core_2client.html#autotoc_md576", null ],
        [ "聊天操作", "md_packages_2core_2src_2core_2client.html#autotoc_md577", null ],
        [ "内容生成", "md_packages_2core_2src_2core_2client.html#autotoc_md578", null ],
        [ "工具管理", "md_packages_2core_2src_2core_2client.html#autotoc_md579", null ]
      ] ],
      [ "辅助函数", "md_packages_2core_2src_2core_2client.html#autotoc_md580", null ],
      [ "常量", "md_packages_2core_2src_2core_2client.html#autotoc_md581", null ]
    ] ],
    [ "ContentGenerator 接口和相关实现", "md_packages_2core_2src_2core_2content_generator.html", [
      [ "ContentGenerator 接口", "md_packages_2core_2src_2core_2content_generator.html#autotoc_md583", [
        [ "核心方法", "md_packages_2core_2src_2core_2content_generator.html#autotoc_md584", null ]
      ] ],
      [ "AuthType 枚举", "md_packages_2core_2src_2core_2content_generator.html#autotoc_md585", null ],
      [ "ContentGeneratorConfig 类型", "md_packages_2core_2src_2core_2content_generator.html#autotoc_md586", null ],
      [ "核心函数", "md_packages_2core_2src_2core_2content_generator.html#autotoc_md587", [
        [ "createContentGeneratorConfig()", "md_packages_2core_2src_2core_2content_generator.html#autotoc_md588", null ],
        [ "createContentGenerator()", "md_packages_2core_2src_2core_2content_generator.html#autotoc_md589", null ]
      ] ]
    ] ],
    [ "GeminiChat 类", "md_packages_2core_2src_2core_2gemini_chat.html", [
      [ "主要功能", "md_packages_2core_2src_2core_2gemini_chat.html#autotoc_md591", null ],
      [ "核心方法", "md_packages_2core_2src_2core_2gemini_chat.html#autotoc_md592", [
        [ "消息发送", "md_packages_2core_2src_2core_2gemini_chat.html#autotoc_md593", null ],
        [ "历史记录管理", "md_packages_2core_2src_2core_2gemini_chat.html#autotoc_md594", null ],
        [ "工具管理", "md_packages_2core_2src_2core_2gemini_chat.html#autotoc_md595", null ]
      ] ],
      [ "内部方法", "md_packages_2core_2src_2core_2gemini_chat.html#autotoc_md596", null ],
      [ "StreamEventType 枚举", "md_packages_2core_2src_2core_2gemini_chat.html#autotoc_md597", null ],
      [ "EmptyStreamError 类", "md_packages_2core_2src_2core_2gemini_chat.html#autotoc_md598", null ]
    ] ],
    [ "Logger 类", "md_packages_2core_2src_2core_2logger.html", [
      [ "主要功能", "md_packages_2core_2src_2core_2logger.html#autotoc_md600", null ],
      [ "核心方法", "md_packages_2core_2src_2core_2logger.html#autotoc_md601", [
        [ "日志记录", "md_packages_2core_2src_2core_2logger.html#autotoc_md602", null ],
        [ "检查点管理", "md_packages_2core_2src_2core_2logger.html#autotoc_md603", null ]
      ] ],
      [ "MessageSenderType 枚举", "md_packages_2core_2src_2core_2logger.html#autotoc_md604", null ],
      [ "LogEntry 接口", "md_packages_2core_2src_2core_2logger.html#autotoc_md605", null ],
      [ "辅助函数", "md_packages_2core_2src_2core_2logger.html#autotoc_md606", [
        [ "encodeTagName()", "md_packages_2core_2src_2core_2logger.html#autotoc_md607", null ],
        [ "decodeTagName()", "md_packages_2core_2src_2core_2logger.html#autotoc_md608", null ]
      ] ]
    ] ],
    [ "提示词系统", "md_packages_2core_2src_2core_2prompts.html", [
      [ "核心函数", "md_packages_2core_2src_2core_2prompts.html#autotoc_md610", [
        [ "getCoreSystemPrompt()", "md_packages_2core_2src_2core_2prompts.html#autotoc_md611", null ],
        [ "getCompressionPrompt()", "md_packages_2core_2src_2core_2prompts.html#autotoc_md612", null ],
        [ "resolvePathFromEnv()", "md_packages_2core_2src_2core_2prompts.html#autotoc_md613", null ]
      ] ],
      [ "系统提示内容", "md_packages_2core_2src_2core_2prompts.html#autotoc_md614", [
        [ "核心指令", "md_packages_2core_2src_2core_2prompts.html#autotoc_md615", null ],
        [ "主要工作流程", "md_packages_2core_2src_2core_2prompts.html#autotoc_md616", null ],
        [ "操作指南", "md_packages_2core_2src_2core_2prompts.html#autotoc_md617", null ],
        [ "工具使用", "md_packages_2core_2src_2core_2prompts.html#autotoc_md618", null ]
      ] ]
    ] ],
    [ "Token 限制管理", "md_packages_2core_2src_2core_2token_limits.html", [
      [ "核心函数", "md_packages_2core_2src_2core_2token_limits.html#autotoc_md620", [
        [ "tokenLimit()", "md_packages_2core_2src_2core_2token_limits.html#autotoc_md621", null ]
      ] ],
      [ "常量", "md_packages_2core_2src_2core_2token_limits.html#autotoc_md622", [
        [ "DEFAULT_TOKEN_LIMIT", "md_packages_2core_2src_2core_2token_limits.html#autotoc_md623", null ]
      ] ],
      [ "使用说明", "md_packages_2core_2src_2core_2token_limits.html#autotoc_md624", null ]
    ] ],
    [ "Turn 类和相关类型", "md_packages_2core_2src_2core_2turn.html", [
      [ "Turn 类", "md_packages_2core_2src_2core_2turn.html#autotoc_md626", [
        [ "主要功能", "md_packages_2core_2src_2core_2turn.html#autotoc_md627", null ],
        [ "核心方法", "md_packages_2core_2src_2core_2turn.html#autotoc_md628", null ],
        [ "属性", "md_packages_2core_2src_2core_2turn.html#autotoc_md629", null ]
      ] ],
      [ "事件类型", "md_packages_2core_2src_2core_2turn.html#autotoc_md630", [
        [ "GeminiEventType 枚举", "md_packages_2core_2src_2core_2turn.html#autotoc_md631", null ]
      ] ],
      [ "数据结构", "md_packages_2core_2src_2core_2turn.html#autotoc_md632", [
        [ "ServerGeminiStreamEvent", "md_packages_2core_2src_2core_2turn.html#autotoc_md633", null ],
        [ "CompressionStatus 枚举", "md_packages_2core_2src_2core_2turn.html#autotoc_md634", null ],
        [ "ChatCompressionInfo 接口", "md_packages_2core_2src_2core_2turn.html#autotoc_md635", null ]
      ] ],
      [ "辅助函数", "md_packages_2core_2src_2core_2turn.html#autotoc_md636", [
        [ "getCitations()", "md_packages_2core_2src_2core_2turn.html#autotoc_md637", null ]
      ] ]
    ] ],
    [ "IDE Constants", "md_packages_2core_2src_2ide_2constants_8ts.html", [
      [ "Extension Name", "md_packages_2core_2src_2ide_2constants_8ts.html#autotoc_md639", [
        [ "GEMINI_CLI_COMPANION_EXTENSION_NAME", "md_packages_2core_2src_2ide_2constants_8ts.html#autotoc_md640", null ]
      ] ]
    ] ],
    [ "IDE 客户端 (IdeClient)", "md_packages_2core_2src_2ide_2ide-client.html", [
      [ "主要功能", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md642", null ],
      [ "核心组件", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md643", [
        [ "IDEConnectionState", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md644", null ],
        [ "IDEConnectionStatus 枚举", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md645", null ]
      ] ],
      [ "核心方法", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md646", [
        [ "getInstance()", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md647", null ],
        [ "connect()", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md648", null ],
        [ "openDiff()", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md649", null ],
        [ "closeDiff()", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md650", null ],
        [ "disconnect()", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md651", null ]
      ] ],
      [ "事件处理", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md652", [
        [ "状态变更监听", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md653", null ],
        [ "信任变更监听", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md654", null ]
      ] ],
      [ "辅助功能", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md655", [
        [ "工作区验证", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md656", null ],
        [ "连接配置", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md657", null ],
        [ "进程检测", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md658", null ]
      ] ],
      [ "数据结构", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md659", [
        [ "DiffUpdateResult", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md660", null ],
        [ "StdioConfig", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md661", null ]
      ] ],
      [ "错误处理", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md662", [
        [ "连接错误", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md663", null ],
        [ "差异处理错误", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md664", null ]
      ] ],
      [ "跨平台支持", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md665", [
        [ "网络配置", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md666", null ],
        [ "进程管理", "md_packages_2core_2src_2ide_2ide-client.html#autotoc_md667", null ]
      ] ]
    ] ],
    [ "MCP OAuth 提供者 (MCPOAuthProvider)", "md_packages_2core_2src_2mcp_2oauth-provider.html", [
      [ "主要功能", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md669", null ],
      [ "核心组件", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md670", [
        [ "MCPOAuthConfig", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md671", null ]
      ] ],
      [ "核心方法", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md672", [
        [ "authenticate()", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md673", null ],
        [ "getValidToken()", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md674", null ],
        [ "refreshAccessToken()", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md675", null ]
      ] ],
      [ "认证流程", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md676", [
        [ "OAuth 发现", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md677", null ],
        [ "动态客户端注册", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md678", null ],
        [ "PKCE 流程", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md679", null ]
      ] ],
      [ "令牌管理", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md680", [
        [ "令牌存储", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md681", null ],
        [ "令牌刷新", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md682", null ]
      ] ],
      [ "用户交互", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md683", [
        [ "浏览器打开", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md684", null ],
        [ "回调处理", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md685", null ]
      ] ],
      [ "错误处理", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md686", [
        [ "认证错误", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md687", null ],
        [ "用户友好错误", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md688", null ]
      ] ],
      [ "安全特性", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md689", [
        [ "CSRF 保护", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md690", null ],
        [ "PKCE 保护", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md691", null ],
        [ "安全存储", "md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md692", null ]
      ] ]
    ] ],
    [ "提示词注册表 (PromptRegistry)", "md_packages_2core_2src_2prompts_2prompt-registry.html", [
      [ "主要功能", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md694", null ],
      [ "核心方法", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md695", [
        [ "registerPrompt()", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md696", null ],
        [ "getAllPrompts()", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md697", null ],
        [ "getPrompt()", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md698", null ],
        [ "getPromptsByServer()", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md699", null ],
        [ "clear()", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md700", null ],
        [ "removePromptsByServer()", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md701", null ]
      ] ],
      [ "数据结构", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md702", [
        [ "提示词存储", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md703", null ]
      ] ],
      [ "命名冲突处理", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md704", null ],
      [ "排序和检索", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md705", [
        [ "名称排序", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md706", null ],
        [ "服务器分组", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md707", null ]
      ] ],
      [ "使用场景", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md708", [
        [ "MCP 集成", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md709", null ],
        [ "提示词发现", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md710", null ],
        [ "提示词执行", "md_packages_2core_2src_2prompts_2prompt-registry.html#autotoc_md711", null ]
      ] ]
    ] ],
    [ "聊天记录服务 (ChatRecordingService)", "md_packages_2core_2src_2services_2chat_recording_service.html", [
      [ "主要功能", "md_packages_2core_2src_2services_2chat_recording_service.html#autotoc_md713", null ],
      [ "核心数据结构", "md_packages_2core_2src_2services_2chat_recording_service.html#autotoc_md714", [
        [ "ConversationRecord", "md_packages_2core_2src_2services_2chat_recording_service.html#autotoc_md715", null ],
        [ "MessageRecord", "md_packages_2core_2src_2services_2chat_recording_service.html#autotoc_md716", null ],
        [ "ToolCallRecord", "md_packages_2core_2src_2services_2chat_recording_service.html#autotoc_md717", null ]
      ] ],
      [ "核心方法", "md_packages_2core_2src_2services_2chat_recording_service.html#autotoc_md718", [
        [ "初始化", "md_packages_2core_2src_2services_2chat_recording_service.html#autotoc_md719", null ],
        [ "记录操作", "md_packages_2core_2src_2services_2chat_recording_service.html#autotoc_md720", null ],
        [ "会话管理", "md_packages_2core_2src_2services_2chat_recording_service.html#autotoc_md721", null ]
      ] ],
      [ "特殊功能", "md_packages_2core_2src_2services_2chat_recording_service.html#autotoc_md722", [
        [ "实时更新", "md_packages_2core_2src_2services_2chat_recording_service.html#autotoc_md723", null ],
        [ "数据丰富", "md_packages_2core_2src_2services_2chat_recording_service.html#autotoc_md724", null ],
        [ "会话恢复", "md_packages_2core_2src_2services_2chat_recording_service.html#autotoc_md725", null ],
        [ "文件管理", "md_packages_2core_2src_2services_2chat_recording_service.html#autotoc_md726", null ]
      ] ]
    ] ],
    [ "文件系统服务 (FileSystemService)", "md_packages_2core_2src_2services_2file_system_service.html", [
      [ "核心接口", "md_packages_2core_2src_2services_2file_system_service.html#autotoc_md728", [
        [ "FileSystemService 接口", "md_packages_2core_2src_2services_2file_system_service.html#autotoc_md729", null ]
      ] ],
      [ "核心实现", "md_packages_2core_2src_2services_2file_system_service.html#autotoc_md730", [
        [ "StandardFileSystemService 类", "md_packages_2core_2src_2services_2file_system_service.html#autotoc_md731", null ]
      ] ],
      [ "功能详解", "md_packages_2core_2src_2services_2file_system_service.html#autotoc_md732", [
        [ "文本文件读取 (readTextFile)", "md_packages_2core_2src_2services_2file_system_service.html#autotoc_md733", null ],
        [ "文本文件写入 (writeTextFile)", "md_packages_2core_2src_2services_2file_system_service.html#autotoc_md734", null ]
      ] ],
      [ "设计模式", "md_packages_2core_2src_2services_2file_system_service.html#autotoc_md735", [
        [ "抽象接口模式", "md_packages_2core_2src_2services_2file_system_service.html#autotoc_md736", null ],
        [ "依赖注入", "md_packages_2core_2src_2services_2file_system_service.html#autotoc_md737", null ]
      ] ],
      [ "使用场景", "md_packages_2core_2src_2services_2file_system_service.html#autotoc_md738", [
        [ "标准使用", "md_packages_2core_2src_2services_2file_system_service.html#autotoc_md739", null ],
        [ "测试使用", "md_packages_2core_2src_2services_2file_system_service.html#autotoc_md740", null ],
        [ "特殊环境", "md_packages_2core_2src_2services_2file_system_service.html#autotoc_md741", null ]
      ] ]
    ] ],
    [ "Shell 执行服务 (ShellExecutionService)", "md_packages_2core_2src_2services_2shell_execution_service.html", [
      [ "主要功能", "md_packages_2core_2src_2services_2shell_execution_service.html#autotoc_md743", null ],
      [ "核心数据结构", "md_packages_2core_2src_2services_2shell_execution_service.html#autotoc_md744", [
        [ "ShellExecutionResult", "md_packages_2core_2src_2services_2shell_execution_service.html#autotoc_md745", null ],
        [ "ShellOutputEvent", "md_packages_2core_2src_2services_2shell_execution_service.html#autotoc_md746", null ]
      ] ],
      [ "核心方法", "md_packages_2core_2src_2services_2shell_execution_service.html#autotoc_md747", [
        [ "execute()", "md_packages_2core_2src_2services_2shell_execution_service.html#autotoc_md748", null ],
        [ "executeWithPty()", "md_packages_2core_2src_2services_2shell_execution_service.html#autotoc_md749", null ],
        [ "childProcessFallback()", "md_packages_2core_2src_2services_2shell_execution_service.html#autotoc_md750", null ]
      ] ],
      [ "特殊功能", "md_packages_2core_2src_2services_2shell_execution_service.html#autotoc_md751", [
        [ "编码处理", "md_packages_2core_2src_2services_2shell_execution_service.html#autotoc_md752", null ],
        [ "ANSI 转义序列处理", "md_packages_2core_2src_2services_2shell_execution_service.html#autotoc_md753", null ],
        [ "二进制输出检测", "md_packages_2core_2src_2services_2shell_execution_service.html#autotoc_md754", null ],
        [ "进程终止处理", "md_packages_2core_2src_2services_2shell_execution_service.html#autotoc_md755", null ]
      ] ],
      [ "跨平台支持", "md_packages_2core_2src_2services_2shell_execution_service.html#autotoc_md756", [
        [ "Windows 支持", "md_packages_2core_2src_2services_2shell_execution_service.html#autotoc_md757", null ],
        [ "POSIX 支持", "md_packages_2core_2src_2services_2shell_execution_service.html#autotoc_md758", null ]
      ] ]
    ] ],
    [ "Telemetry Constants", "md_packages_2core_2src_2telemetry_2constants_8ts.html", [
      [ "Service Name", "md_packages_2core_2src_2telemetry_2constants_8ts.html#autotoc_md760", [
        [ "SERVICE_NAME", "md_packages_2core_2src_2telemetry_2constants_8ts.html#autotoc_md761", null ]
      ] ],
      [ "Event Constants", "md_packages_2core_2src_2telemetry_2constants_8ts.html#autotoc_md762", null ],
      [ "Metric Constants", "md_packages_2core_2src_2telemetry_2constants_8ts.html#autotoc_md763", null ]
    ] ],
    [ "遥测系统", "md_packages_2core_2src_2telemetry_2index.html", [
      [ "核心组件", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md765", [
        [ "TelemetryTarget 枚举", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md766", null ],
        [ "initializeTelemetry()", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md767", null ],
        [ "shutdownTelemetry()", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md768", null ]
      ] ],
      [ "日志记录器", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md769", [
        [ "logCliConfiguration()", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md770", null ],
        [ "logUserPrompt()", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md771", null ],
        [ "logToolCall()", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md772", null ],
        [ "logApiRequest()", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md773", null ],
        [ "logApiError()", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md774", null ],
        [ "logApiResponse()", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md775", null ]
      ] ],
      [ "指标记录", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md776", [
        [ "recordApiErrorMetrics()", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md777", null ],
        [ "recordTokenUsageMetrics()", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md778", null ],
        [ "recordApiResponseMetrics()", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md779", null ],
        [ "recordToolCallMetrics()", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md780", null ]
      ] ],
      [ "常量", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md781", [
        [ "默认设置", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md782", null ]
      ] ],
      [ "集成组件", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md783", [
        [ "OpenTelemetry SDK", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md784", null ],
        [ "ClearcutLogger", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md785", null ],
        [ "文件导出器", "md_packages_2core_2src_2telemetry_2index.html#autotoc_md786", null ]
      ] ]
    ] ],
    [ "Telemetry Index", "md_packages_2core_2src_2telemetry_2index_8ts.html", [
      [ "Enumerations", "md_packages_2core_2src_2telemetry_2index_8ts.html#autotoc_md788", [
        [ "TelemetryTarget", "md_packages_2core_2src_2telemetry_2index_8ts.html#autotoc_md789", null ]
      ] ],
      [ "Constants", "md_packages_2core_2src_2telemetry_2index_8ts.html#autotoc_md790", [
        [ "Default Values", "md_packages_2core_2src_2telemetry_2index_8ts.html#autotoc_md791", null ]
      ] ],
      [ "Exports", "md_packages_2core_2src_2telemetry_2index_8ts.html#autotoc_md792", [
        [ "SDK Functions", "md_packages_2core_2src_2telemetry_2index_8ts.html#autotoc_md793", null ],
        [ "Logging Functions", "md_packages_2core_2src_2telemetry_2index_8ts.html#autotoc_md794", null ],
        [ "Event Types", "md_packages_2core_2src_2telemetry_2index_8ts.html#autotoc_md795", null ],
        [ "Event Creation Functions", "md_packages_2core_2src_2telemetry_2index_8ts.html#autotoc_md796", null ],
        [ "Type Definitions", "md_packages_2core_2src_2telemetry_2index_8ts.html#autotoc_md797", null ],
        [ "OpenTelemetry Exports", "md_packages_2core_2src_2telemetry_2index_8ts.html#autotoc_md798", null ],
        [ "UI Telemetry", "md_packages_2core_2src_2telemetry_2index_8ts.html#autotoc_md799", null ]
      ] ]
    ] ],
    [ "遥测日志记录器 (loggers.ts)", "md_packages_2core_2src_2telemetry_2loggers.html", [
      [ "核心功能", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md801", null ],
      [ "核心函数", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md802", [
        [ "logCliConfiguration()", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md803", null ],
        [ "logUserPrompt()", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md804", null ],
        [ "logToolCall()", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md805", null ],
        [ "logFileOperation()", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md806", null ],
        [ "logApiRequest()", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md807", null ],
        [ "logApiError()", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md808", null ],
        [ "logApiResponse()", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md809", null ]
      ] ],
      [ "辅助函数", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md810", [
        [ "getCommonAttributes()", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md811", null ],
        [ "shouldLogUserPrompts()", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md812", null ]
      ] ],
      [ "指标记录集成", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md813", [
        [ "recordToolCallMetrics()", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md814", null ],
        [ "recordFileOperationMetric()", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md815", null ],
        [ "recordApiErrorMetrics()", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md816", null ],
        [ "recordTokenUsageMetrics()", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md817", null ],
        [ "recordApiResponseMetrics()", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md818", null ]
      ] ],
      [ "Clearcut 集成", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md819", null ],
      [ "UI 遥测集成", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md820", null ],
      [ "数据安全", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md821", [
        [ "敏感数据处理", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md822", null ],
        [ "数据验证", "md_packages_2core_2src_2telemetry_2loggers.html#autotoc_md823", null ]
      ] ]
    ] ],
    [ "Telemetry Loggers", "md_packages_2core_2src_2telemetry_2loggers_8ts.html", [
      [ "Helper Functions", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md825", [
        [ "shouldLogUserPrompts", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md826", null ],
        [ "getCommonAttributes", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md827", null ]
      ] ],
      [ "Event Logging Functions", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md828", [
        [ "logCliConfiguration", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md829", null ],
        [ "logUserPrompt", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md830", null ],
        [ "logToolCall", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md831", null ],
        [ "logFileOperation", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md832", null ],
        [ "logApiRequest", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md833", null ],
        [ "logFlashFallback", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md834", null ],
        [ "logApiError", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md835", null ],
        [ "logApiResponse", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md836", null ],
        [ "logLoopDetected", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md837", null ],
        [ "logNextSpeakerCheck", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md838", null ],
        [ "logSlashCommand", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md839", null ],
        [ "logIdeConnection", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md840", null ],
        [ "logConversationFinishedEvent", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md841", null ],
        [ "logChatCompression", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md842", null ],
        [ "logKittySequenceOverflow", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md843", null ],
        [ "logMalformedJsonResponse", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md844", null ],
        [ "logInvalidChunk", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md845", null ],
        [ "logContentRetry", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md846", null ],
        [ "logContentRetryFailure", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md847", null ]
      ] ],
      [ "Integration", "md_packages_2core_2src_2telemetry_2loggers_8ts.html#autotoc_md848", null ]
    ] ],
    [ "遥测 SDK (sdk.ts)", "md_packages_2core_2src_2telemetry_2sdk.html", [
      [ "核心功能", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md850", null ],
      [ "核心变量", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md851", [
        [ "sdk", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md852", null ],
        [ "telemetryInitialized", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md853", null ]
      ] ],
      [ "核心函数", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md854", [
        [ "initializeTelemetry()", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md855", null ],
        [ "shutdownTelemetry()", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md856", null ],
        [ "isTelemetrySdkInitialized()", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md857", null ],
        [ "parseOtlpEndpoint()", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md858", null ]
      ] ],
      [ "导出器配置", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md859", [
        [ "OTLP 导出器", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md860", null ],
        [ "文件导出器", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md861", null ],
        [ "控制台导出器", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md862", null ]
      ] ],
      [ "资源配置", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md863", [
        [ "SemanticResourceAttributes", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md864", null ],
        [ "自定义属性", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md865", null ]
      ] ],
      [ "信号处理", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md866", [
        [ "进程信号监听", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md867", null ]
      ] ],
      [ "依赖组件", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md868", [
        [ "OpenTelemetry 组件", "md_packages_2core_2src_2telemetry_2sdk.html#autotoc_md869", null ]
      ] ]
    ] ],
    [ "Telemetry SDK", "md_packages_2core_2src_2telemetry_2sdk_8ts.html", [
      [ "Global Variables", "md_packages_2core_2src_2telemetry_2sdk_8ts.html#autotoc_md871", null ],
      [ "Functions", "md_packages_2core_2src_2telemetry_2sdk_8ts.html#autotoc_md872", [
        [ "isTelemetrySdkInitialized", "md_packages_2core_2src_2telemetry_2sdk_8ts.html#autotoc_md873", null ],
        [ "parseOtlpEndpoint", "md_packages_2core_2src_2telemetry_2sdk_8ts.html#autotoc_md874", null ],
        [ "initializeTelemetry", "md_packages_2core_2src_2telemetry_2sdk_8ts.html#autotoc_md875", null ],
        [ "shutdownTelemetry", "md_packages_2core_2src_2telemetry_2sdk_8ts.html#autotoc_md876", null ]
      ] ],
      [ "Dependencies", "md_packages_2core_2src_2telemetry_2sdk_8ts.html#autotoc_md877", null ],
      [ "Debugging", "md_packages_2core_2src_2telemetry_2sdk_8ts.html#autotoc_md878", null ]
    ] ],
    [ "遥测事件类型 (types.ts)", "md_packages_2core_2src_2telemetry_2types.html", [
      [ "基础类型", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md880", [
        [ "BaseTelemetryEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md881", null ]
      ] ],
      [ "核心事件类型", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md882", [
        [ "StartSessionEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md883", null ],
        [ "EndSessionEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md884", null ],
        [ "UserPromptEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md885", null ],
        [ "ToolCallEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md886", null ],
        [ "ApiRequestEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md887", null ],
        [ "ApiErrorEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md888", null ],
        [ "ApiResponseEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md889", null ],
        [ "FlashFallbackEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md890", null ]
      ] ],
      [ "特殊事件类型", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md891", [
        [ "LoopDetectedEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md892", null ],
        [ "NextSpeakerCheckEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md893", null ],
        [ "SlashCommandEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md894", null ],
        [ "ChatCompressionEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md895", null ],
        [ "FileOperationEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md896", null ]
      ] ],
      [ "IDE 相关事件", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md897", [
        [ "IdeConnectionEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md898", null ]
      ] ],
      [ "会话结束事件", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md899", [
        [ "ConversationFinishedEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md900", null ]
      ] ],
      [ "错误处理事件", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md901", [
        [ "KittySequenceOverflowEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md902", null ],
        [ "MalformedJsonResponseEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md903", null ],
        [ "InvalidChunkEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md904", null ],
        [ "ContentRetryEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md905", null ],
        [ "ContentRetryFailureEvent", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md906", null ]
      ] ],
      [ "枚举类型", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md907", [
        [ "LoopType", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md908", null ],
        [ "SlashCommandStatus", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md909", null ],
        [ "IdeConnectionType", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md910", null ]
      ] ],
      [ "工具函数", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md911", [
        [ "makeSlashCommandEvent()", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md912", null ],
        [ "makeChatCompressionEvent()", "md_packages_2core_2src_2telemetry_2types.html#autotoc_md913", null ]
      ] ]
    ] ],
    [ "测试工具 (test-utils)", "md_packages_2core_2src_2test-utils_2index.html", [
      [ "核心组件", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md915", [
        [ "MockTool 类", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md916", null ],
        [ "MockToolOptions 接口", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md917", null ],
        [ "MockToolInvocation 类", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md918", null ]
      ] ],
      [ "使用场景", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md919", [
        [ "工具测试", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md920", null ],
        [ "集成测试", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md921", null ],
        [ "性能测试", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md922", null ]
      ] ],
      [ "配置选项详解", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md923", [
        [ "执行函数 (execute)", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md924", null ],
        [ "确认函数 (shouldConfirmExecute)", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md925", null ],
        [ "输出选项", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md926", null ]
      ] ],
      [ "扩展性", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md927", [
        [ "自定义行为", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md928", null ],
        [ "灵活配置", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md929", null ]
      ] ],
      [ "测试支持", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md930", [
        [ "简单测试", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md931", null ],
        [ "复杂场景", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md932", null ],
        [ "集成验证", "md_packages_2core_2src_2test-utils_2index.html#autotoc_md933", null ]
      ] ]
    ] ],
    [ "Diff Options Utility", "md_packages_2core_2src_2tools_2diff_options_8ts.html", [
      [ "Constants", "md_packages_2core_2src_2tools_2diff_options_8ts.html#autotoc_md935", [
        [ "DEFAULT_DIFF_OPTIONS", "md_packages_2core_2src_2tools_2diff_options_8ts.html#autotoc_md936", null ]
      ] ],
      [ "Functions", "md_packages_2core_2src_2tools_2diff_options_8ts.html#autotoc_md937", [
        [ "getDiffStat", "md_packages_2core_2src_2tools_2diff_options_8ts.html#autotoc_md938", null ]
      ] ]
    ] ],
    [ "EditTool 类", "md_packages_2core_2src_2tools_2edit.html", [
      [ "主要功能", "md_packages_2core_2src_2tools_2edit.html#autotoc_md940", null ],
      [ "核心组件", "md_packages_2core_2src_2tools_2edit.html#autotoc_md941", [
        [ "EditToolParams 接口", "md_packages_2core_2src_2tools_2edit.html#autotoc_md942", null ],
        [ "EditTool 类", "md_packages_2core_2src_2tools_2edit.html#autotoc_md943", null ],
        [ "EditToolInvocation 类", "md_packages_2core_2src_2tools_2edit.html#autotoc_md944", null ]
      ] ],
      [ "特殊功能", "md_packages_2core_2src_2tools_2edit.html#autotoc_md945", [
        [ "精确替换", "md_packages_2core_2src_2tools_2edit.html#autotoc_md946", null ],
        [ "差异显示", "md_packages_2core_2src_2tools_2edit.html#autotoc_md947", null ],
        [ "错误处理", "md_packages_2core_2src_2tools_2edit.html#autotoc_md948", null ],
        [ "遥测集成", "md_packages_2core_2src_2tools_2edit.html#autotoc_md949", null ]
      ] ]
    ] ],
    [ "ReadFileTool 类", "md_packages_2core_2src_2tools_2read-file.html", [
      [ "主要功能", "md_packages_2core_2src_2tools_2read-file.html#autotoc_md951", null ],
      [ "核心组件", "md_packages_2core_2src_2tools_2read-file.html#autotoc_md952", [
        [ "ReadFileToolParams 接口", "md_packages_2core_2src_2tools_2read-file.html#autotoc_md953", null ],
        [ "ReadFileTool 类", "md_packages_2core_2src_2tools_2read-file.html#autotoc_md954", null ],
        [ "ReadFileToolInvocation 类", "md_packages_2core_2src_2tools_2read-file.html#autotoc_md955", null ]
      ] ],
      [ "特殊功能", "md_packages_2core_2src_2tools_2read-file.html#autotoc_md956", [
        [ "内容截断处理", "md_packages_2core_2src_2tools_2read-file.html#autotoc_md957", null ],
        [ "多媒体文件支持", "md_packages_2core_2src_2tools_2read-file.html#autotoc_md958", null ],
        [ "遥测集成", "md_packages_2core_2src_2tools_2read-file.html#autotoc_md959", null ]
      ] ]
    ] ],
    [ "ShellTool 类", "md_packages_2core_2src_2tools_2shell.html", [
      [ "主要功能", "md_packages_2core_2src_2tools_2shell.html#autotoc_md961", null ],
      [ "核心组件", "md_packages_2core_2src_2tools_2shell.html#autotoc_md962", [
        [ "ShellToolParams 接口", "md_packages_2core_2src_2tools_2shell.html#autotoc_md963", null ],
        [ "ShellTool 类", "md_packages_2core_2src_2tools_2shell.html#autotoc_md964", null ],
        [ "ShellToolInvocation 类", "md_packages_2core_2src_2tools_2shell.html#autotoc_md965", null ]
      ] ],
      [ "特殊功能", "md_packages_2core_2src_2tools_2shell.html#autotoc_md966", [
        [ "流式输出处理", "md_packages_2core_2src_2tools_2shell.html#autotoc_md967", null ],
        [ "跨平台支持", "md_packages_2core_2src_2tools_2shell.html#autotoc_md968", null ],
        [ "进程管理", "md_packages_2core_2src_2tools_2shell.html#autotoc_md969", null ],
        [ "安全机制", "md_packages_2core_2src_2tools_2shell.html#autotoc_md970", null ],
        [ "遥测集成", "md_packages_2core_2src_2tools_2shell.html#autotoc_md971", null ]
      ] ]
    ] ],
    [ "Tool Registry", "md_packages_2core_2src_2tools_2tool-registry_8ts.html", [
      [ "Core Classes", "md_packages_2core_2src_2tools_2tool-registry_8ts.html#autotoc_md973", [
        [ "DiscoveredToolInvocation", "md_packages_2core_2src_2tools_2tool-registry_8ts.html#autotoc_md974", null ],
        [ "DiscoveredTool", "md_packages_2core_2src_2tools_2tool-registry_8ts.html#autotoc_md975", null ],
        [ "ToolRegistry", "md_packages_2core_2src_2tools_2tool-registry_8ts.html#autotoc_md976", [
          [ "Tool Management", "md_packages_2core_2src_2tools_2tool-registry_8ts.html#autotoc_md977", null ],
          [ "Tool Discovery", "md_packages_2core_2src_2tools_2tool-registry_8ts.html#autotoc_md978", null ],
          [ "Schema Management", "md_packages_2core_2src_2tools_2tool-registry_8ts.html#autotoc_md979", null ],
          [ "MCP Integration", "md_packages_2core_2src_2tools_2tool-registry_8ts.html#autotoc_md980", null ]
        ] ]
      ] ],
      [ "Key Features", "md_packages_2core_2src_2tools_2tool-registry_8ts.html#autotoc_md981", [
        [ "Dynamic Tool Discovery", "md_packages_2core_2src_2tools_2tool-registry_8ts.html#autotoc_md982", null ],
        [ "MCP Server Integration", "md_packages_2core_2src_2tools_2tool-registry_8ts.html#autotoc_md983", null ],
        [ "Process Management", "md_packages_2core_2src_2tools_2tool-registry_8ts.html#autotoc_md984", null ],
        [ "Error Handling", "md_packages_2core_2src_2tools_2tool-registry_8ts.html#autotoc_md985", null ]
      ] ],
      [ "Dependencies", "md_packages_2core_2src_2tools_2tool-registry_8ts.html#autotoc_md986", null ]
    ] ],
    [ "工具系统", "md_packages_2core_2src_2tools_2tools.html", [
      [ "核心接口和类", "md_packages_2core_2src_2tools_2tools.html#autotoc_md988", [
        [ "ToolInvocation 接口", "md_packages_2core_2src_2tools_2tools.html#autotoc_md989", null ],
        [ "ToolBuilder 接口", "md_packages_2core_2src_2tools_2tools.html#autotoc_md990", null ],
        [ "DeclarativeTool 抽象类", "md_packages_2core_2src_2tools_2tools.html#autotoc_md991", null ],
        [ "BaseDeclarativeTool 抽象类", "md_packages_2core_2src_2tools_2tools.html#autotoc_md992", null ]
      ] ],
      [ "工具结果和相关类型", "md_packages_2core_2src_2tools_2tools.html#autotoc_md993", [
        [ "ToolResult 接口", "md_packages_2core_2src_2tools_2tools.html#autotoc_md994", null ],
        [ "ToolCallConfirmationDetails 类型", "md_packages_2core_2src_2tools_2tools.html#autotoc_md995", null ]
      ] ],
      [ "工具类型枚举", "md_packages_2core_2src_2tools_2tools.html#autotoc_md996", [
        [ "Kind 枚举", "md_packages_2core_2src_2tools_2tools.html#autotoc_md997", null ],
        [ "ToolConfirmationOutcome 枚举", "md_packages_2core_2src_2tools_2tools.html#autotoc_md998", null ]
      ] ],
      [ "辅助函数", "md_packages_2core_2src_2tools_2tools.html#autotoc_md999", [
        [ "hasCycleInSchema()", "md_packages_2core_2src_2tools_2tools.html#autotoc_md1000", null ],
        [ "isTool()", "md_packages_2core_2src_2tools_2tools.html#autotoc_md1001", null ]
      ] ]
    ] ],
    [ "Tools Framework", "md_packages_2core_2src_2tools_2tools_8ts.html", [
      [ "Core Interfaces", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1003", [
        [ "ToolInvocation", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1004", null ],
        [ "ToolBuilder", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1005", null ],
        [ "ToolResult", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1006", null ]
      ] ],
      [ "Base Classes", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1007", [
        [ "BaseToolInvocation", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1008", null ],
        [ "DeclarativeTool", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1009", null ],
        [ "BaseDeclarativeTool", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1010", null ]
      ] ],
      [ "Type Definitions", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1011", [
        [ "ToolResultDisplay", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1012", null ],
        [ "FileDiff", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1013", null ],
        [ "DiffStat", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1014", null ],
        [ "ToolCallConfirmationDetails", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1015", null ],
        [ "ToolConfirmationPayload", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1016", null ],
        [ "ToolLocation", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1017", null ]
      ] ],
      [ "Enumerations", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1018", [
        [ "ToolConfirmationOutcome", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1019", null ],
        [ "Kind", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1020", null ]
      ] ],
      [ "Utility Functions", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1021", [
        [ "hasCycleInSchema", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1022", null ]
      ] ],
      [ "Type Guards", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1023", [
        [ "isTool", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1024", null ]
      ] ],
      [ "Type Aliases", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1025", [
        [ "AnyToolInvocation", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1026", null ],
        [ "AnyDeclarativeTool", "md_packages_2core_2src_2tools_2tools_8ts.html#autotoc_md1027", null ]
      ] ]
    ] ],
    [ "错误处理工具", "md_packages_2core_2src_2utils_2errors.html", [
      [ "核心函数", "md_packages_2core_2src_2utils_2errors.html#autotoc_md1029", [
        [ "类型检查", "md_packages_2core_2src_2utils_2errors.html#autotoc_md1030", null ],
        [ "错误信息提取", "md_packages_2core_2src_2utils_2errors.html#autotoc_md1031", null ],
        [ "错误转换", "md_packages_2core_2src_2utils_2errors.html#autotoc_md1032", null ]
      ] ],
      [ "自定义错误类", "md_packages_2core_2src_2utils_2errors.html#autotoc_md1033", [
        [ "FatalError", "md_packages_2core_2src_2utils_2errors.html#autotoc_md1034", null ],
        [ "特定致命错误", "md_packages_2core_2src_2utils_2errors.html#autotoc_md1035", null ],
        [ "业务逻辑错误", "md_packages_2core_2src_2utils_2errors.html#autotoc_md1036", null ]
      ] ],
      [ "功能详解", "md_packages_2core_2src_2utils_2errors.html#autotoc_md1037", [
        [ "错误类型检查 (isNodeError)", "md_packages_2core_2src_2utils_2errors.html#autotoc_md1038", null ],
        [ "错误消息提取 (getErrorMessage)", "md_packages_2core_2src_2utils_2errors.html#autotoc_md1039", null ],
        [ "友好错误转换 (toFriendlyError)", "md_packages_2core_2src_2utils_2errors.html#autotoc_md1040", null ],
        [ "响应数据解析 (parseResponseData)", "md_packages_2core_2src_2utils_2errors.html#autotoc_md1041", null ]
      ] ]
    ] ],
    [ "路径处理工具", "md_packages_2core_2src_2utils_2paths.html", [
      [ "核心函数", "md_packages_2core_2src_2utils_2paths.html#autotoc_md1043", [
        [ "路径转换", "md_packages_2core_2src_2utils_2paths.html#autotoc_md1044", null ],
        [ "路径显示", "md_packages_2core_2src_2utils_2paths.html#autotoc_md1045", null ],
        [ "路径验证", "md_packages_2core_2src_2utils_2paths.html#autotoc_md1046", null ]
      ] ],
      [ "常量", "md_packages_2core_2src_2utils_2paths.html#autotoc_md1047", [
        [ "GEMINI_DIR", "md_packages_2core_2src_2utils_2paths.html#autotoc_md1048", null ],
        [ "GOOGLE_ACCOUNTS_FILENAME", "md_packages_2core_2src_2utils_2paths.html#autotoc_md1049", null ],
        [ "SHELL_SPECIAL_CHARS", "md_packages_2core_2src_2utils_2paths.html#autotoc_md1050", null ]
      ] ],
      [ "功能详解", "md_packages_2core_2src_2utils_2paths.html#autotoc_md1051", [
        [ "路径缩短 (shortenPath)", "md_packages_2core_2src_2utils_2paths.html#autotoc_md1052", null ],
        [ "相对路径计算 (makeRelative)", "md_packages_2core_2src_2utils_2paths.html#autotoc_md1053", null ],
        [ "特殊字符转义 (escapePath)", "md_packages_2core_2src_2utils_2paths.html#autotoc_md1054", null ],
        [ "项目哈希 (getProjectHash)", "md_packages_2core_2src_2utils_2paths.html#autotoc_md1055", null ],
        [ "子路径检查 (isSubpath)", "md_packages_2core_2src_2utils_2paths.html#autotoc_md1056", null ]
      ] ]
    ] ],
    [ "Core Test Setup", "md_packages_2core_2test-setup_8ts.html", [
      [ "Environment Configuration", "md_packages_2core_2test-setup_8ts.html#autotoc_md1058", null ],
      [ "429 Simulation", "md_packages_2core_2test-setup_8ts.html#autotoc_md1059", null ]
    ] ],
    [ "vitest.config.ts", "md_packages_2core_2vitest_8config_8ts.html", [
      [ "概述", "md_packages_2core_2vitest_8config_8ts.html#autotoc_md1061", null ],
      [ "配置详情", "md_packages_2core_2vitest_8config_8ts.html#autotoc_md1062", [
        [ "测试报告器", "md_packages_2core_2vitest_8config_8ts.html#autotoc_md1063", null ],
        [ "测试设置", "md_packages_2core_2vitest_8config_8ts.html#autotoc_md1064", null ],
        [ "代码覆盖率", "md_packages_2core_2vitest_8config_8ts.html#autotoc_md1065", null ]
      ] ],
      [ "使用方式", "md_packages_2core_2vitest_8config_8ts.html#autotoc_md1066", null ]
    ] ],
    [ "Local Development", "md_packages_2vscode-ide-companion_2development.html", [
      [ "Running the Extension", "md_packages_2vscode-ide-companion_2development.html#autotoc_md1068", null ],
      [ "Running Tests", "md_packages_2vscode-ide-companion_2development.html#autotoc_md1069", null ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_ascii_art_8ts.html",
"gemini_chat_8ts.html",
"md_packages_2a2a-server_2src_2utils_2testing__utils_8ts.html#autotoc_md158",
"md_packages_2cli_2src_2ui_2_app_container_8tsx.html#autotoc_md429",
"md_packages_2core_2src_2mcp_2oauth-provider.html#autotoc_md679",
"md_packages_2core_2src_2test-utils_2index.html#autotoc_md929",
"shell_command_processor_8ts.html"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';