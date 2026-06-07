param(
  [string]$ProjectRoot = (Split-Path -Parent $MyInvocation.MyCommand.Path)
)

$Snapshot = Join-Path $ProjectRoot 'saved-versions\baas-polish-three-issues-20260608-verified'
if (-not (Test-Path $Snapshot)) {
  throw "Snapshot not found: $Snapshot"
}

$items = @('src','public','index.html','package.json','package-lock.json','postcss.config.js','tailwind.config.js','vite.config.js','.gitignore')
foreach ($item in $items) {
  $target = Join-Path $ProjectRoot $item
  if (Test-Path $target) {
    Remove-Item -LiteralPath $target -Recurse -Force
  }
  Copy-Item -LiteralPath (Join-Path $Snapshot $item) -Destination $ProjectRoot -Recurse -Force
}

Write-Host 'Restored BAAS approved version: baas-polish-three-issues-20260608-verified'
