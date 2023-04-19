@Rem Copyright Epic Games, Inc. All Rights Reserved.

@echo off

@Rem Set script directory as working directory.
pushd "%~dp0"

title Cirrus

@Rem Move to cirrus directory.
pushd ..\..

@Rem Run node server and pass any argument along.
platform_scripts\cmd\node\node.exe cirrus %*

@Rem Pop cirrus directory.
popd

@Rem Pop script directory.
popd

pause